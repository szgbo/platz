import React from "react";

import { getTransform } from "../../utils/infiniteHelper";

interface Props {
  pos: [number, number];
  x: number;
  y: number;
  zoom: number;
  children: React.ReactNode;
}

export function InfDiv ({ pos, x, y, zoom, children }: Props) {
  return (
    <div className="inf-div" style={{ transform: getTransform(pos, [x, y], zoom) }}>
      {children}
    </div>
  );
}

export function InfClickDiv ({ pos, x, y, zoom, children }: Props) {
  return (
    <div className="inf-click-div" style={{ transform: getTransform(pos, [x, y], zoom) }}>
      {children}
    </div>
  );
}