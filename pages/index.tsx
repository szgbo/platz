
import InfiniteCanvas from '../components/infiniteCanvas/infiniteCanvas'
import HomePage from '../components/homeContent'

// TODO: add vertical mac doc?
// TODO: styled components?

// TODO: add min max bound as prop to pass in at page level
// TODO: add 3 layers abstraction, can just pass in component list into big container?
// TODO: abstract out components --> more like library the better it is?
// TODO: grid background + ability to zoom background

export const title = "Return to Home";

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
