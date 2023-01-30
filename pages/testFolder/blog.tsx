import type { NextPage } from 'next'
import {useRouter} from 'next/router';
import { useState, useEffect, useRef } from 'react'
import { initCursorChat } from 'cursor-chat'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Blog: NextPage = () => {

  const router = useRouter();

  return (
    <div>
        <div>{router.pathname}</div>
    </div>
  )
}

export default Blog