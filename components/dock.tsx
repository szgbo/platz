//  adapted from https://github.com/PuruVJ/macos-web/tree/main/src/components/Dock
import React from "react";
import { useMotionValue } from "framer-motion";

import DockItem from "./dockItem";

const pagesArr = ['home', 'fruits', 'cars', 'testCursor'];

export function Dock() {
  // tracks x coordinate of mouse in dock
  const dockMouseX = useMotionValue<number | null>(null);
  
  return (
    // z-index 50 in css
    <div className="dock-container">
      <div 
        className="dock-el"
        onMouseMove={(e) => { 
          dockMouseX.set(e.nativeEvent.x) 
        }}
        onMouseLeave={() => { 
          dockMouseX.set(null); 
        }}
      >
        {pagesArr.map((page) => {
          return <DockItem 
            key={page} 
            mouseX={dockMouseX} 
            iconSrc={"/icons/" + page + "_icon.svg"}
            pageName={page}
          />
        })}
      </div>
    </div>
  );
}

export default Dock;