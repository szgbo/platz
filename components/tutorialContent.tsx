import React, {useState} from 'react';
import Center from './infiniteCanvas/center';

import styles from '../styles/Tutorial.module.css'

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -375;
const pos : posDict = {
  message: [offsetX, -50],
  terms: [offsetX, 30],
  link: [offsetX, 200],
}

const TutorialContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.message} align='left'>
        <h3 className={styles.message}>
          We&apos;re designing a tutorial system that empowers those 
          without any coding background to build their own website with ease.
        </h3>
      </InfDiv>
      <InfDiv {...props} pos={pos.terms} align='left'>
        <h6 className={styles.terms}>
          If you are a creative and are interested in creating a website with our features, <br />
          please <a href={"https://p576j33mzl2.typeform.com/to/C78XvI3z"}>fill out this form</a> and 
          we&apos;d love to help / better develop our tutorial system!
        </h6>
      </InfDiv>
    </>
  )
}

export default TutorialContent;