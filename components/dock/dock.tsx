//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React from "react";
import { useMotionValue } from "framer-motion";
import styles from "../../styles/Dock.module.css";

import DockItem from "./dockItem";
// list of links and icons
const pagesArr = ['home', 'features', 'tutorial', 'about', 'testCursor'];
const icons = ['P_icon', 'L_icon', 'A_icon', 'T_icon', 'Z_icon'];

export function Dock() {
  // tracks x coordinate of mouse in dock
  const dockMouseX = useMotionValue<number | null>(null);
  
  return (
    // z-index 50 in css
    <div className={styles["dock-container"]}>
      <div 
        className={styles["dock-el"]}
        onMouseMove={(e) => { 
          dockMouseX.set(e.nativeEvent.x) 
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
            doAnimation={false}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;