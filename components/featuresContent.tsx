import React, {useState} from 'react';
import Center from './infiniteCanvas/center';
import DockSample from './dock/dockSmaple';

import styles from '../styles/Features.module.css'

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = 0
const pos : posDict = {
  infinteCanvasVideo: [offsetX, -35],
  dockNavigation: [offsetX, 330],
  sampleDock: [offsetX, 480],
  cursorChat: [offsetX, 600],
  cursorChatVideo: [offsetX, 770],
  cmdk: [offsetX, 1050],
}

const FeaturesContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.infiniteCanvas} >
        <h2 className={styles.title}>
          infinite canvas
        </h2>
      </InfDiv>
      <InfDiv {...props} pos={pos.infinteCanvasVideo}>
        <video autoPlay loop muted playsInline
          src={'/infCanvas.mp4'}
          width={281} height={500}
          style={{
            height: "auto",
            width: "500px",
            objectFit: "contain",
          }}/>
      </InfDiv>
      <InfDiv {...props} pos={pos.dockNavigation} >
        <h2 className={styles.title}>
          Dock Navigation
        </h2>
      </InfDiv>
      <InfClickDiv {...props} pos={pos.sampleDock} >
        <div className={styles.sampleDock}>
          <DockSample />
        </div>
      </InfClickDiv>
      <InfDiv {...props} pos={pos.cursorChat} >
        <h2 className={styles.title}>
          cursor chat
        </h2>
      </InfDiv>
      <InfDiv {...props} pos={pos.cursorChatVideo} >
        <video autoPlay loop muted playsInline
          src={'/cursorChat.mp4'}
          width={281} height={500}
          style={{
            height: "auto",
            width: "500px",
            objectFit: "contain",
          }}/>
      </InfDiv>
      <InfDiv {...props} pos={pos.cmdk} >
        <h2 className={styles.title}>
          cmdk
        </h2>
      </InfDiv>
    </>
  )
}

export default FeaturesContent;