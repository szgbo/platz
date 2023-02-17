import React, {useState} from 'react';
import Center from './infiniteCanvas/center';
import DockSample from './dock/dockSmaple';

import styles from '../styles/Features.module.css'

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = 0
const pos : posDict = {
  infiniteCanvas: [offsetX, -200],
  infinteCanvasVideo: [offsetX, -50],
  dockNavigation: [offsetX, 250],
  sampleDock: [offsetX, 430],
  cursorChat: [offsetX, 500],
  cursorChatVideo: [offsetX, 650],
  cmdk: [offsetX, 850],
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
          width={100} height={300}
          style={{
            height: "auto",
            width: "400px",
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
          width={100} height={300}
          style={{
            height: "auto",
            width: "300px",
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