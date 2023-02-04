import React, {useState} from 'react';
import Image from 'next/image'
import { getTransform } from '../utils/infiniteHelper'

interface Props {
  zoom: number,
  x: number,
  y: number,
}

const positions = {
  center: [0, 0],
  title: [-200, 0],
  subtitle: [-7, 50],
}

const HomePage = ({x, y, zoom}: Props) => {

  return (
    <>
      {/* <div className='inf-div' style={{ 
        transform: getTransform(positions.center, [x, y], zoom) 
      }}>
        center
      </div> */}
      <div className='inf-div' style={{ 
        transform: getTransform(positions.title, [x, y], zoom) 
      }}>
        <div className='title'>
          Platz
        </div>
      </div>
      <div className='inf-div' style={{ 
        transform: getTransform(positions.subtitle, [x, y], zoom) 
      }}>
        <div className='subtitle'>
          an open source personal website template for creatives
        </div>
      </div>
    </>
  )
}

export default HomePage;