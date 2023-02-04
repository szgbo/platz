import React from 'react';

import InfiniteCanvas from '../components/infiniteCanvas'
import Cars from '../components/cars'

// import Dock from '../components/dock';

export default function Tutorial() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(Cars)
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1}/>
    </div>
  ) 
}
