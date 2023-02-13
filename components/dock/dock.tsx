//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React from "react";
import { useMotionValue } from "framer-motion";
import styles from "../../styles/Dock.module.css";

import DockItem from "./dockItem";

const pagesArr = ['home', 'features', 'tutorial', 'about', 'testCursor'];
const icons = ['home_icon', 'F_icon', 'D_icon', 'P_icon', 'P_icon']

const pagesArr2 = ['testCursor']
const icons2 = ['P_icon']

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
            iconSrc={"/icons/" + icons[i] + ".svg"}
            pageName={page}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;