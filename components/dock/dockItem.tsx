// adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock

//TODO: make styles more modular for vertical and horizontal dock

import React, { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { useRouter } from 'next/router';
import { useRaf } from 'rooks';
import { motion, useMotionValue, useSpring, useAnimation, MotionValue, useTransform } from "framer-motion";
import CustomLink from "./customLink";
import cx from 'classnames';

import styles from "../../styles/Dock.module.css";

const useDockHoverAnimation = (
  mouseX: MotionValue | null,  
  ref: RefObject<HTMLImageElement>,
  direction: 'left' | 'right' | 'bottom',
) => {
    // constants for animation
  // this is the distance from the center of the dock item to the edge of the dock item
  const baseWidth = 60;
  // limit is distance needed to enter for animations to start
  const distanceLimit = baseWidth * 5;
  
  const beyondTheDistanceLimit = distanceLimit + 1;
  // used to measure the distance between the mouse pointer and the center of the dock item
  // matched with widthoutput to control how much to scale the icon depending on the mouse
  const distanceInput = [
    -distanceLimit,
    -distanceLimit / 1.25,
    -distanceLimit / 2,
    0,
    distanceLimit / 2,
    distanceLimit / 1.25,
    distanceLimit,
  ];
  // controls how much the dock item should expand 
  const widthOutput = [
    baseWidth,
    baseWidth * 1.1,
    baseWidth * 1.3,
    baseWidth * 1.5,
    baseWidth * 1.3,
    baseWidth * 1.1,
    baseWidth,
  ];

  const distance = useMotionValue(beyondTheDistanceLimit);
  const widthPX = useSpring(
    // usetransform equiv to interpolate
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1700,
      damping: 90
    }
  );
  // doing the division outside of the hook doesnt update the value
  const width = useTransform(widthPX, (width) => `${width / 16}rem`);
  // hook for tracking animation
  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX?.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();
      let imgCenterX = 0;
      if (direction == 'bottom') {
        imgCenterX = rect.left + rect.width / 2;
      } else {
        imgCenterX = rect.top + rect.height / 2;
      }
      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX;
      if (direction === 'right') {
        distance.set(-distanceDelta);
      } else {
        distance.set(distanceDelta);
      }
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);
  
  return { width, widthPX };
}


interface Props {
  mouseX: MotionValue | null;
  iconSrc: string;
  pageName: string;
  link: string;
  direction: 'left' | 'right' | 'bottom' ;
  doAnimation?: boolean;
  overlaySrc?: string;
}
export function DockItem({mouseX, iconSrc, pageName, link, doAnimation = true, overlaySrc, direction='bottom'}: Props) {

  function setIconImgSrc(src: string | undefined) {
    const iconImg = document.querySelector('#' + pageName);
    if (iconImg && src) {
      iconImg.setAttribute('src', src);
    }
  }

  const router = useRouter();
  // change dot adn overlay on page reload
  useEffect(() => {
    if (router.pathname.includes(pageName) && pageName !== "home") {
      setDotOpacity(1);
      setIconImgSrc(overlaySrc);
    } else if (pageName === "home" && router.pathname === "/") {
      setDotOpacity(1);
      setIconImgSrc(overlaySrc);
    } else {
      setDotOpacity(0);
      setIconImgSrc(iconSrc);
    }
  }, [router.pathname])
  
  const [dotOpacity, setDotOpacity] = useState<number>(0);
  useEffect(() => {
    // imageEl = document.getElementById("dockItem-icon") as HTMLElement;
    if (router.pathname.includes(pageName) && pageName !== "home") {
      setIconImgSrc(overlaySrc);
      setDotOpacity(1);
    } else if (pageName === "home" && router.pathname === "/") {
      setIconImgSrc(overlaySrc);
        setDotOpacity(1);
    } else {
      setDotOpacity(0);
      setIconImgSrc(iconSrc);
    }
  }, []);

  const imgRef = useRef<HTMLImageElement>(null);
  let { width } = useDockHoverAnimation(mouseX, imgRef, direction);

  const iconTitle = pageName;

  const controls = useAnimation();
  async function bounceEffect() {
    var coords = ["", "", ""];
    if (direction === "right") {
      coords = ["-15px, 0", "0.1px, 0", "0, 0"];
    } else if (direction === "left") {
        coords = ["15px, 0", "-0.1px, 0", "0, 0"];
    } else if (direction === "bottom") {
        coords = ["0, -15px", "0, 0.1px", "0, 0"];
    }
    if (!doAnimation) return;
    await controls.start({
        transform: `translate(${coords[0]})`,
        transition: { duration: 0.4, ease: [0.5, 0.5, 0.5, 1] },
    });
    await controls.start({
        transform: `translate(${coords[1]})`,
        transition: { duration: 0.4, ease: [0.5, 0.5, 0.5, 1] },
    });
    // for some reason translating to (0,0) doesn't play an animation
    await controls.start({
      transform: `translate(${coords[2]})`,
      transition: { duration: 0.1, ease: [0.5, 0.5, 0.5, 1] },
    });
  }

  return (
    //  use link instead of <a> for faster page transitions
    <CustomLink href={link}>
      <div
        onClick={bounceEffect} 
        aria-label={iconTitle} 
        className={cx(
          styles["dock-item-container"],
          styles[`dock-item-container-${direction}`]
        )}
      >
      {/* <!-- label tag for text ontop --> */}
      <motion.p
        animate={controls}
        className={cx(
          styles["dock-item-tooltip"],
          styles[`dock-item-tooltip-${direction}`]
        )}
      >
        {iconTitle}
      </motion.p>
      <motion.span 
        style={{ 
          // width: `${widthPX.get() / 16}rem`,
          width: doAnimation? width : undefined,
          willChange: "width",
        }}
        onMouseEnter={() => {
          setIconImgSrc(overlaySrc);
        }}
        onMouseLeave={() => {
          if ((!router.pathname.includes(pageName) && pageName !== "home") 
                || (pageName === "home" && router.pathname === "")) {
            setIconImgSrc(iconSrc);
          }
        }}
        // ref={imgRef}
      >
        {/* <!-- img tag for the icon --> */}
          <motion.img
            animate={controls} 
            id={pageName}
            ref={imgRef}
            className={styles["dock-item-img"]}
            src={iconSrc}
            alt={iconTitle}
            style={{ 
              // width: `${widthPX.get() / 16}rem`,
              width: doAnimation? width : undefined,
              willChange: "width",
            }}
            draggable="false"
          />
      </motion.span>
      {/* <!-- dot opacity depends on if app is open or not, open apps in global state -->
      <!-- sets the opacity state according to if app is open --> 
      <!-- + sign converts the variable to an integer (javascript unary plus) --> */}
      <div className={styles["dot"]} style={{
        opacity: dotOpacity,
      }} />
    </div>
  </CustomLink>
  );
}

export default DockItem;