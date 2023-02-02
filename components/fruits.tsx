import React from 'react';

import Image from 'next/image'
import { getTransform } from '../utils/infiniteHelper'

interface Props {
  zoom: number,
  x: number,
  y: number,
}

const sources = [
  "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=", 
  "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg",
  "https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg",
]
  const positions = [[500, 50], [0, 0], [200, 200]]

const Fruits = ({x, y, zoom}: Props) => {
  return (
    <>
      <div className='inf-div' style={{ 
        transform: getTransform(positions[0], [x, y], zoom) 
      }}>
        <button> 
          <Image 
            src={sources[0]} 
            draggable="false"
            alt="123" 
            width={200}
            height={200}/>
        </button>
      </div>
      <div className='inf-div' style={{ 
        transform: getTransform(positions[1], [x, y], zoom) 
      }}>
        <button> 
          <Image 
            src={sources[1]} 
            draggable="false"
            alt="123" 
            width={200}
            height={200}/>
        </button>
      </div>
      <div className='inf-div' style={{ 
        transform: getTransform(positions[2], [x, y], zoom) 
      }}>
        <button> 
          <Image 
            src={sources[2]} 
            draggable="false"
            alt="123" 
            width={200}
            height={200}/>
        </button>
      </div>
    </>
  )
}

export default Fruits;