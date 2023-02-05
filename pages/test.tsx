import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
import { initCursorChat } from 'cursor-chat'

import TestComponent from '../components/TestComponent'
import bg from './bg2.png';

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Test: NextPage = () => {
  useEffect(() => {
    const cleanUp = initCursorChat('platz_cursor_chat_room')
    return cleanUp;
  }, []);

  return (
    <main> 
      <div id="cursor-chat-layer">
        <input type="text" id="cursor-chat-box"></input>
        <TestComponent />
      </div>
    </main>
  )
}

export default Test