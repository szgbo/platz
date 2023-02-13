import React, {useState} from 'react';
import { type infProps, type posDict, InfDiv } from './infiniteDiv'

const pos : posDict = {
  title: [0, 0],
  subtitle: [0, 50],
}

const Center = (props: infProps) => {

  return (
    <>
      <InfDiv pos={pos.center} {...props}>
        <h1> C </h1>
      </InfDiv>
    </>
  )
}

export default Center;