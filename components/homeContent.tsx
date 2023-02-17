import React, {useState} from 'react';
import Center from './infiniteCanvas/center';


import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -275
const pos : posDict = {
  title: [offsetX, 0],
  subtitle: [offsetX, 37],
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
      <InfClickDiv {...props} pos={pos.subtitle} align='left'>
      <h3>
        an <a href={"https://github.com/hellsegga-platz/platz"} target="_blank" rel="noopener noreferrer">open source</a> personal website template for creatives
      </h3>
      </InfClickDiv>
    </>
  )
}

export default HomeContent;