import React, {useState} from 'react';
import Image from 'next/image'
import { getTransform } from './infiniteCanvas/infiniteHelper'
import { InfDiv } from './infiniteCanvas/infiniteDiv'
import Center from './infiniteCanvas/center';

// TODO: add more props for inf canvas: corner origin, min max y, color of bkground, image, etc
// TODO: add vertical mac doc? 
// TODO: styled components?
// TODO: add support for rendering pages in advance if big img or vid
//         option to add loaders
//         SGG vs SSR OPTIONS
// TODO: initial pre load? 

interface Props {
  zoom: number,
  x: number,
  y: number,
}

const pos : { [key: string]: [number, number] } = {
  title: [-200, 0],
  subtitle: [-7, 50],
}

const HomePage = (props: Props) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv pos={pos.title} {...props}>
        <h1>
          Platz
        </h1>
      </InfDiv>
      <InfDiv pos={pos.subtitle} {...props}>
        <h3>
          an open source personal website template for creatives
        </h3>
      </InfDiv>
    </>
  )
}

export default HomePage;