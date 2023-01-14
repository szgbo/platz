import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { TouchZoom } from "./touchZoom";
import Image from 'next/image'



export default function TestComponent() {
  const [zoom, setZoom] = useState(1.0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [touchZoom, setTouchZoom] = useState<TouchZoom | null>(null)

  const sources = ["https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=", "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"]
  const positions = [[300, 300], [0, 0]]

  // let frame: HTMLDivElement;

  useEffect(() => {
    const frame = document.getElementById("frame") as HTMLDivElement;
    console.log("ghello")
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
    setTouchZoom(newTZ)
    // const intervalId = window.setInterval(() => {
    //   console.log('Hello, world!');
    // }, 1000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [])

  function getTransform(pos: number[], center: number[], zoom: number): string {
    return `scale(${(zoom * 100).toFixed(3)}%) translate(
      ${pos[0] - center[0]}px,
      ${pos[1] - center[1]}px
    )`;
  }

  return (
    <main style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden', 
    }}>
      <div style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        touchAction: "none",
      }} id="frame">
        <div style={{
          transform: getTransform(positions[1], [x, y], zoom),
        }}>
        <button> 
          <Image src={sources[1]} alt="123"/>
        </button>
        </div>
      </div>
    </main>
  )
}