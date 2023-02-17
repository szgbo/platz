import React, {useState} from 'react';
import { type infProps, type posDict, InfDiv } from './infiniteCanvas/infiniteDiv'

import styles from '../styles/About.module.css'

const offsetx = -325
const pos : posDict = {
  overview: [offsetx, -200],
  credit: [offsetx, 0],
  adopted: [offsetx, 200],
  poweredby: [offsetx, 450],
}

interface credit {
  name: string,
  link: string,
}

const AboutContent = (props: infProps) => {


  const credits: credit[] = [
    {name: 'infinite canvas', link: 'https://github.com/ekzhang/dispict/tree/main/src/lib'},
    {name: 'mac dock navigation', link: 'https://github.com/PuruVJ/macos-web'},
    {name: 'cursor chat', link: 'https://github.com/jackyzha0/cursor-chat'},
    {name: 'cmd k', link: 'https://cmdk.paco.me/'},
  ]

  const adoptedBy = ['boboland.xyz', 'igloo.place', 'lilthyu.com']

  return (
    <>
      <InfDiv {...props} pos={pos.overview} align='left'>
        <h2 className={styles.title}>
          overview
        </h2>
        <p className={styles.overview}>
          Platz&apos;s infinite canvas based template empowers creatives to present their work
          in its most natural form. 
        </p>
      </InfDiv>
      <InfDiv {...props} pos={pos.credit} align='left'>
        <h2 className={styles.title}>
          credit
        </h2>
        <p className={styles.smallText}>
          We have adopted code from the following repo and modified/optimized for our own purpose
        </p>
        <div className={styles.creditList}>
          {credits.map((credit) => (<div key={credit.name}><a href={credit.link}>{credit.name}</a></div>))}
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.adopted} align='left'>
        <h2 className={styles.titleAnnoying}>
          ADOPTED by
        </h2>
        <div className={styles.adoptedList}>
          {adoptedBy.map((person) => (<div key={person}><a href={person}>{person}</a></div>))}
        </div>
      </InfDiv>
    </>
  )
}

export default AboutContent;