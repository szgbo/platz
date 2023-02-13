import React from 'react'
import { useState, useEffect } from 'react'
import { getTransform } from './infiniteHelper'

import { TouchZoom } from "./touchZoom";
interface Props {
  zoom: number,
  x: number,
  y: number,
  // provide a color for the background if needed for a specific page
  color?: string,
}

// higher order component that takes a component as an argument
const InfiniteCanvas = <P extends Props>(WrappedComponent: React.ComponentType<P>) => {
  const InfiniteCanvasComponent = (props: P) => {

    const [zoom, setZoom] = useState(1.0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const ID = "frame"

    // mount touchzoom to the infinite canvas div
    useEffect(() => {
      const frame = document.getElementById(ID) as HTMLDivElement;
      const newTZ = new TouchZoom(frame);
      newTZ.onMove((manual) => {
        setX(newTZ.center[0])
        setY(newTZ.center[1])
        setZoom(newTZ.zoom)
        if (manual) {
            if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
            }
        }
      });
    }, [])
    
    return (
      <div 
        className='infinite-container'
        style={{ 
          backgroundColor: props.color ? props.color : undefined,
        }}
      >
        <div className='infinite-canvas' id={ID}>
          <WrappedComponent {...props} zoom={zoom} x={x} y={y} />
        </div>
      </div>
    )
  }
  return InfiniteCanvasComponent
}

export default InfiniteCanvas