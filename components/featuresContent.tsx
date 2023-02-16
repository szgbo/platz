import React, {useState} from 'react';
import Center from './infiniteCanvas/center';

import styles from '../styles/Features.module.css'

import { type infProps, type posDict, InfDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -295
const pos : posDict = {
  infiniteCanvas: [offsetX, -150],
  dockNavigation: [offsetX, 50],
  cursorChat: [offsetX, 200],
  cmdk: [offsetX, 350],
}

const FeaturesContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.infiniteCanvas} align='left' >
        <div className={styles.features}>
          <h2>
            infinite canvas
          </h2>
          <p>
            Built for creatives, Platz’s infinite canvas based template frees users from grids 
            and flex-boxes and empowers them to present their work in a non-linear way. 
            Moreover, users can worry less about responsive design when the mobile viewing 
            experience is just organic with dragging and pinching. Our implementation of infinite 
            canvas is from Eric Zhang’s Dispict Gallery project.
          </p>
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.dockNavigation} align='left' >
        <div className={styles.features}>
          <h2>
            dock navigation
          </h2>
          <p>
          Aside from a traditional navigation bar, we have also provided a component that resembles the mac dock. 
          This gives users an opportunity to differentiate their websites with unique icons that echos the theme 
          of their work. Our implementation of the mac dock is adapted from Puru Vijay’s macos-web.
          </p>
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.cursorChat} align='left' >
        <div className={styles.features}>
          <h2>
            cursor chat
          </h2>
          <p>
            Built by Jacky Zhao, cursor chat adds a level of playfulness to users’ websites.
          </p>
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.cmdk} align='left' >
        <div className={styles.features}>
          <h2>
            CMDK
          </h2>
          <p>
            Built by Paco, CMDK can be used to index website and help visitors to
            quickly search for contents when they are lost.
          </p>
        </div>
      </InfDiv>
    </>
  )
}

export default FeaturesContent;