import React, {useState} from 'react';
import { type infProps, type posDict, InfDiv } from './infiniteDiv'

const pos : posDict = {
  center: [0, 0],
  up: [0,-50],
  down: [0,50],
  left: [-50,0],
  right: [50,0],
}

const Center = (props: infProps) => {

  return (
    <>
      <InfDiv pos={pos.center} {...props}>
        <h3>O</h3>
      </InfDiv>
      <InfDiv pos={pos.up} {...props}>
        <h3>O</h3>
      </InfDiv>
      <InfDiv pos={pos.down} {...props}>
        <h3>O</h3>
      </InfDiv>
      <InfDiv pos={pos.left} {...props}>
        <h3>O</h3>
      </InfDiv>
      <InfDiv pos={pos.right} {...props}>
        <h3>O</h3>
      </InfDiv>
    </>
  )
}

export default Center;