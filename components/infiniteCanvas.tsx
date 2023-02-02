import React from 'react'
import { useState, useEffect } from 'react'

import { TouchZoom } from "./touchZoom";

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

    const sources = ["https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=", "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"]
    const positions = [[500, 50], [0, 0]]

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

    function getTransform(pos: number[], center: number[], zoom: number): string {
      return `scale(${(zoom * 100).toFixed(3)}%) translate(
        ${pos[0] - center[0]}px,
        ${pos[1] - center[1]}px
      )`;
    }
    
    return (
      <div className='infinite-container'>
        <div className='infinite-canvas' id={ID}>
          <WrappedComponent {...props} zoom={zoom} x={x} y={y} />
        </div>
      </div>
    )
  }
  return InfiniteCanvasComponent
}

export default InfiniteCanvas