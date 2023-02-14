import React from "react";
import { useState, useEffect, useRef } from "react";
import { getTransform } from "../utils/infiniteHelper";
import { initCursorChat } from "cursor-chat";

import { TouchZoom } from "./touchZoom";
import NavBar from "./navBar";
interface Props {
  zoom: number;
  x: number;
  y: number;
}

const InfiniteCanvas = <P extends Props>(
  WrappedComponent: React.ComponentType<P>
) => {
  const InfiniteCanvasComponent = (props: P) => {
    const [zoom, setZoom] = useState(1.0);
    // x and y mark the center of the frame
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const zoomRef = useRef(1.0);
    const xRef = useRef(0);
    const yRef = useRef(0);

    zoomRef.current = zoom;
    xRef.current = x;
    yRef.current = y;

    const ID = "frame";

    useEffect(() => {
      let cleanup;
      let handleInfiniteCanvasMove;
      try {
        const init = initCursorChat(
          "platz_cursor_chat_room_infinite_canvas",
          () => xRef.current,
          () => yRef.current,
          () => zoomRef.current
        );
        console.log(init);
        cleanup = init.cleanup;
        handleInfiniteCanvasMove = init.handleInfiniteCanvasMove;
      } catch (e) {
        console.log(e);
      }

      const frame = document.getElementById(ID) as HTMLDivElement;
      const newTZ = new TouchZoom(frame);
      newTZ.onMove((manual) => {
        setX(newTZ.center[0]);
        setY(newTZ.center[1]);
        setZoom(newTZ.zoom);
        // console.log(newTZ.center[0], newTZ.center[1]);
        handleInfiniteCanvasMove(newTZ.center[0], newTZ.center[1], newTZ.zoom);

        if (manual) {
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        }
      });
      return cleanup;
    }, []);

    // useEffect(() => {
    //   try {
    //     const { cleanup, handleInfiniteCanvasMove } = initCursorChat(
    //       "platz_cursor_chat_room_index",
    //       () => xRef.current,
    //       () => yRef.current,
    //       () => zoomRef.current
    //     );
    //     console.log(handleInfiniteCanvasMove);
    //     setHandleInfiniteCanvasMove(handleInfiniteCanvasMove);
    //     return cleanup;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }, []);

    const navBarPosition = [0, -400];

    return (
      <div className="infinite-container">
        <div className="infinite-canvas" id={ID}>
          <div className="inf-div" id="cursor-chat-layer">
            <div id="cursor-chat-box"></div>
          </div>
          <div
            className="inf-click-div"
            style={{
              transform: getTransform(navBarPosition, [x, y], zoom),
            }}
          >
            <NavBar />
          </div>
          <WrappedComponent {...props} zoom={zoom} x={x} y={y} />
        </div>
      </div>
    );
  };
  return InfiniteCanvasComponent;
};

export default InfiniteCanvas;
