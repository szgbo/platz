import React, {useState} from 'react';
import Image from 'next/image'
import { getTransform } from '../utils/infiniteHelper'

// TODO: refactor the styles, refactor macdock? easier for icons and routes? for nav as well
// TODO: make better modular styles, center div, flex rows? 
// TODO: base fonts, base colors, base styles, base components, center
// TODO: add bgcolor to inf canvas, add center, h1, h2, h3 .. h6, image, vid, link, base components
// TODO: turn inf div into its own component. can just pass in {...props} and then add pos as extra prop
// TODO: add vertical mac doc? 
// TODO: think about how to stream line making pages, can maybe include html in the page to reduce files
// TODO: styled components?
// TODO: add support for rendering pages in advance if big img or vid
// TODO: option to add loaders

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