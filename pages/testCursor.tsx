import type { NextPage } from 'next'
import {useRouter} from 'next/router';
import { useState, useEffect, useRef } from 'react'
import { initCursorChat } from 'cursor-chat'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export const title='this is a test page'

const TestCursor: NextPage = () => {

  useEffect(() => {
    try {
      initCursorChat('platz_cursor_chat_room')
    } catch (error) {
      console.log(error)
      console.log('')
    }
  }, []);

  const router = useRouter();
  // // change dot on page reload
  // useEffect(() => {
  //   const cleanUp = initCursorChat('platz_cursor_chat_room')
  //   return cleanUp;
  // }, [router.pathname])

  return (
    <div id="cursor-chat-layer">
        <input type="text" id="cursor-chat-box"></input>
        <div>{router.pathname}</div>
    </div>
  )
}

export default TestCursor