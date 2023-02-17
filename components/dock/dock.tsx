//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React, {useState} from "react";
import { useMotionValue } from "framer-motion";
import cx from 'classnames';

import styles from "../../styles/Dock.module.css";
import DockItem from "./dockItem";
// list of links and icons
const pagesArr = ['home', 'features', 'tutorial', 'about', 'https://github.com/hellsegga-platz/platz'];
const icons = ['P_icon', 'L_icon', 'A_icon', 'T_icon', 'Z_icon'];

interface dockItems {
  name: string;
  iconSrc: string;
  href: string;
}

const dockItems: dockItems[] = [
  {
    name: 'HOME',
    iconSrc: 'P_icon',
    href: '/',
  },
  {
    name: 'FEATURES',
    iconSrc: 'L_icon',
    href: '/features',
  },
  {
    name: 'TUTORIAL',
    iconSrc: 'A_icon',
    href: '/tutorial',
  },
  {
    name: 'ABOUT',
    iconSrc: 'T_icon',
    href: '/about',
  },
  {
    name: 'GITHUB',
    iconSrc: 'Z_icon',
    href: 'https://github.com/hellsegga-platz/platz',
  },
]

export function Dock() {
  // tracks coordinate of mouse in dock
  const dockMouseX = useMotionValue<number | null>(null);

  let direction: 'left' | 'right' | 'bottom' = 'bottom';

  return (
    // z-index 50 in css
    <div className={cx(
        styles["dock-container"],
        styles["dock-container-" + direction]
      )}>
      <div 
        className={cx(
          styles["dock-el"],
          styles["dock-el-" + direction]
        )}
        onMouseMove={(e) => { 
          if (direction === 'left' || direction === 'right') {
            dockMouseX.set(e.nativeEvent.y)
          } else {
            dockMouseX.set(e.nativeEvent.x)
          }
        }}
        onMouseLeave={() => { 
          dockMouseX.set(null); 
        }}
      >
        {dockItems.map((item, i) => {
          return <DockItem 
            key={item.name} 
            mouseX={dockMouseX} 
            iconSrc={"/icons/" + item.iconSrc + "_dark.svg"}
            overlaySrc={"/icons/" + item.iconSrc + ".svg"}
            link={item.href}
            pageName={item.name}
            direction={direction}
            doAnimation={false}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;