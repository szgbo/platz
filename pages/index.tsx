import React from 'react';

import InfiniteCanvas from '../components/infiniteCanvas/infiniteCanvas'
import HomePage from '../components/homeContent'

// TODO: add vertical mac doc? 
// TODO: styled components?
// TODO: add support for rendering pages in advance if big img or vid
//         option to add loaders
//         SGG vs SSR OPTIONS
// TODO: initial pre load? 

// import Dock from '../components/dock';

export default function Home() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(HomePage)
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1}/>
    </div>
  ) 
}
