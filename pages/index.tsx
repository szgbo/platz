
import InfiniteCanvas from '../components/infiniteCanvas/infiniteCanvas'
import HomePage from '../components/homeContent'
import { touchZoomConfig } from '../components/infiniteCanvas/infiniteDiv'

// TODO: styled components?

// TODO: add 3 layers abstraction, can just pass in component list into big container?
// TODO: abstract out components --> more like library the better it is?
// TODO: grid background + ability to zoom background



export default function Home() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(HomePage)
  // position and zoom values are arbitrary and serve as placeholders

  const tzConfig: touchZoomConfig = {
    // yMinMax: [-500, 500],
    // xMinMax: [-200, 200],
    // zoomMinMax: [0.1, 50],

    // scrollDirection: 'horizontal',
    scrollDirection: 'vertical',
  }

  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1} config={tzConfig}/>
    </div>
  )
}
