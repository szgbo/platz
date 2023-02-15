import React from 'react';

import InfiniteCanvas from '../components/infiniteCanvas/infiniteCanvas'

// import Dock from '../components/dock';

import FeaturesContent from '../components/featuresContent'

import { type posDict } from '../components/infiniteCanvas/infiniteDiv'

const offsetX = -295
const pos : posDict = {
  infiniteCanvas: [offsetX, -150],
  dockNavigation: [offsetX, 50],
  cursorChat: [offsetX, 200],
  cmdk: [offsetX, 350],
}

export default function Features() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(FeaturesContent)
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1}/>
    </div>
  ) 
}
