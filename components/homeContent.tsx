import React, {useState} from 'react';
import Center from './infiniteCanvas/center';


import { type infProps, type posDict, InfDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -275
const pos : posDict = {
  title: [offsetX, 0],
  subtitle: [offsetX, 50],
}

const HomeContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.title} align='left' >
        <h1>
          Platz
        </h1>
      </InfDiv>
      <InfDiv {...props} pos={pos.subtitle} align='left'>
        <h3>
          an open source personal website template for creatives
        </h3>
      </InfDiv>
    </>
  )
}

export default HomeContent;