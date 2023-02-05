//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React, {useState} from "react";
import { useMotionValue } from "framer-motion";
import styles from "../styles/Dock.module.css";

import DockItem from "./dockItem";

const pagesArr = ['home', 'projects', 'projects', 'projects', 'projects'];
const icons = ['home_icon', 'F_icon', 'D_icon', 'P_icon', 'P_icon']

export function Dock() {
  // tracks coordinate of mouse in dock
  const dockMouseX = useMotionValue<number | null>(null);
  

  return (
    // z-index 50 in css
    <div className={styles["dock-container"]}
        style = {{
            width: '6rem',
            height: '100%',
            left: '10px',
            bottom: '0px',// position: "absolute",
        }}
    >
      <div 
        className={styles["dock-el"]}
        onMouseMove={(e) => { 
          dockMouseX.set(e.nativeEvent.y) 
        }}
        onMouseLeave={() => { 
          dockMouseX.set(null); 
        }}
        style = {{
            width: '100%',
            height: 'max-content',
            flexDirection: 'column',
        }}
      >
        {pagesArr.map((page, i) => {
          return <DockItem 
            key={page} 
            mouseX={dockMouseX} 
            iconSrc={"/icons/" + icons[i] + ".svg"}
            pageName={page}
            direction={'left'}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;