import React from "react";

import InfiniteCanvas from "../components/infiniteCanvas/infiniteCanvas";
import AboutContent from "../components/aboutContent";

// import Dock from '../components/dock';

export const title = "About Platz";

export default function About() {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(
    "platzAboutCursorChatRoom",
    AboutContent
  );
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <InfiniteContent x={0} y={0} zoom={1} />
    </div>
  );
}
