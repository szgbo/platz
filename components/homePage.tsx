import React, { useState } from "react";
import Image from "next/image";
import { getTransform } from "../utils/infiniteHelper";

interface Props {
  zoom: number;
  x: number;
  y: number;
}

const positions = {
  center: [0, 0],
  title: [-200, 0],
  subtitle: [-7, 50],
};

const HomePage = ({ x, y, zoom }: Props) => {
  return (
    <>
      {/* <div className='inf-div' style={{ 
        transform: getTransform(positions.center, [x, y], zoom) 
      }}>
        center
      </div> */}
      <div
        className="inf-div"
        style={{
          transform: getTransform(positions.title, [x, y], zoom),
        }}
      >
        <div className="title">Platz</div>
      </div>
      <div
        className="inf-div"
        style={{
          transform: getTransform(positions.subtitle, [x, y], zoom),
        }}
      >
        <div className="subtitle">
          an open source personal website template for creatives
        </div>
      </div>
      <div
        className="inf-div"
        style={{
          transform: getTransform([100, 80], [x, y], zoom),
        }}
      >
        {`${x.toFixed(0)},${y.toFixed(0)}`}
      </div>
      <div
        className="inf-div"
        style={{
          transform: `translate(${zoom * (100 - x)}px, ${zoom * (80 - y)}px`,
        }}
      >
        {`${x.toFixed(0)},${y.toFixed(0)}`}
      </div>
    </>
  );
};

export default HomePage;
