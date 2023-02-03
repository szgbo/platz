import React from 'react'
import { useState, useEffect } from 'react'
import { getTransform } from '../utils/infiniteHelper'

import { TouchZoom } from "./touchZoom";
import NavBar from './navBar';
interface Props {
  zoom: number,
  x: number,
  y: number,
}

const InfiniteCanvas = <P extends Props>(WrappedComponent: React.ComponentType<P>) => {
  const InfiniteCanvasComponent = (props: P) => {

    const [zoom, setZoom] = useState(1.0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const ID = "frame"

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
      <div className='infinite-container'>
        <div className='infinite-canvas' id={ID}>
          <div className='inf-click-div' style={{ 
            transform: getTransform([0, -300], [x, y], zoom) 
          }}>
            <NavBar />
          </div>
          <WrappedComponent {...props} zoom={zoom} x={x} y={y} />
        </div>
      </div>
    )
  }
  return InfiniteCanvasComponent
}

export default InfiniteCanvas