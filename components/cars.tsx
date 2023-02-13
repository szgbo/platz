import React, {useState} from 'react';
import Image from 'next/image'
import { getTransform } from './infiniteCanvas/infiniteHelper'

interface Props {
  zoom: number,
  x: number,
  y: number,
}

const sources = [
"https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/04/cars_3_characters-1.jpg",
  "https://hips.hearstapps.com/autoweek/assets/s3fs-public/60523009.jpg",
  "https://static.wikia.nocookie.net/pixar/images/7/71/Cars_chick_hicks.jpg/revision/latest/smart/width/250/height/250?cb=20080712053156",
]
const positions = [[0, 100], [225, 150], [-300, 300], [0, -300]]

const Cars = ({x, y, zoom}: Props) => {
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

export default Cars;