import React, {useState} from 'react';
import { getTransform } from './infiniteHelper'


interface Props {
  zoom: number,
  x: number,
  y: number,
}

const pos = {
  center: [0, 0],
}

const Center = ({x, y, zoom}: Props) => {

  return (
    <>
      <div className='inf-div' style={{ 
        transform: getTransform(pos.center, [x, y], zoom) 
      }}>
        C
      </div>
    </>
  )
}

export default Center;