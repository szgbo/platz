import React from 'react'
import { useState, useEffect } from 'react'

import { TouchZoom } from "./touchZoom";
import { type infProps } from './infiniteDiv'


// higher order component that takes a component as an argument
// HOC is used to pass in props to the wrapped component in a type-safe way
const InfiniteCanvas = <P extends infProps>(WrappedComponent: React.ComponentType<P>) => {
  const InfiniteCanvasComponent = (props: P) => {

    const [zoom, setZoom] = useState(1.0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const ID = "frame"

    // mount touchzoom to the infinite canvas div
    // can change bounds in touchZoom.ts L59-L68
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
          backgroundImage: props.url ? `url(${props.url})` : undefined,
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