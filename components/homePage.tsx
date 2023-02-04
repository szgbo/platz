import React, {useState} from 'react';
import Image from 'next/image'
import { getTransform } from '../utils/infiniteHelper'

interface Props {
  zoom: number,
  x: number,
  y: number,
}


const positions = [[0, 100], [225, 150], [-300, 300], [0, -300]]

const HomePage = ({x, y, zoom}: Props) => {

  return (
    <>
      <div className='inf-div' style={{ 
        transform: getTransform(positions[0], [x, y], zoom) 
      }}>
        Platz
      </div>
      <div className='inf-div' style={{ 
        transform: getTransform(positions[1], [x, y], zoom) 
      }}>
        an open source personal website template for creatives
      </div>
    </>
  )
}

export default HomePage;