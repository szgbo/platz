//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React, {useState} from "react";
import { useMotionValue } from "framer-motion";
import cx from 'classnames';

import styles from "../../styles/Dock.module.css";
import DockItem from "./dockItem";
// list of links and icons
const pagesArr = ['home', 'features', 'tutorial', 'about', 'testCursor'];
const icons = ['P_icon', 'L_icon', 'A_icon', 'T_icon', 'Z_icon'];

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
        {pagesArr.map((page, i) => {
          return <DockItem 
            key={page} 
            mouseX={dockMouseX} 
            iconSrc={"/icons/" + icons[i] + "_dark.svg"}
            overlaySrc={"/icons/" + icons[i] + ".svg"}
            pageName={page}
            direction={direction}
            doAnimation={false}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;