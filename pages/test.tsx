import type { NextPage } from 'next'
import { useState, useEffect, useRef } from 'react'

import TestComponent from '../components/TestComponent'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Test: NextPage = () => {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

export default Test