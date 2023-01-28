import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'
import { initCursorChat } from 'cursor-chat'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const TestCursor: NextPage = () => {

  useEffect(() => {
    const cleanUp = initCursorChat('platz_cursor_chat_room')
    return cleanUp;
  }, []);

  return (
    <div id="cursor-chat-layer">
        <input type="text" id="cursor-chat-box"></input>
    </div>
  )
}

export default TestCursor