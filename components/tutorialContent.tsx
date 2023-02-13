import React, {useState} from 'react';
import Center from './infiniteCanvas/center';

import styles from '../styles/Tutorial.module.css'

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = 0
const pos : posDict = {
  message: [offsetX, -50],
  terms: [offsetX, 50],
  link: [offsetX, 200],
}

const TutorialContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.message}>
        <div className={styles.message}>
          <h2>
            We are designing a tutorial system that empowers those 
            without any coding background to build their own website with ease.
          </h2>
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.terms}>
        <div className={styles.terms}>
          <h6>
            If you are a creative and are interested in creating a website with our features, 
            please fill out this form and we’d love to help / better develop our tutorial system!
          </h6>
        </div>
      </InfDiv>
      <InfClickDiv {...props} pos={pos.link}>
        <div className={styles.link}>
          <h3>
            <a href={"https://p576j33mzl2.typeform.com/to/C78XvI3z"} >
                  https://p576j33mzl2.typeform.com/to/C78XvI3z
            </a>
          </h3>
        </div>
      </InfClickDiv>
    </>
  )
}

export default TutorialContent;