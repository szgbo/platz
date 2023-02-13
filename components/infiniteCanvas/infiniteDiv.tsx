import React from "react";

export interface infProps {
  pos?: [number, number],
  zoom: number,
  x: number,
  y: number,
  children?: React.ReactNode;
  align?: alignOption,
  color?: string,
  url?: string,
}
export type posDict = { [key: string]: [number, number] };

type alignOption = 'left' | 'right' | 'center';

export const getTransform = (
  pos: number[] = [0,0], center: number[], zoom: number, 
  // pos is anchored at the [align] edge of the HTML element
  // default pos is at the center of the HTML element
  align: alignOption = 'center'
): string => {
  let translateX = '';
  if (align === 'left') {
    translateX = 'translateX(50%)'
  } else if (align === 'right') {
    translateX = 'translateX(-50%)'
  }

  return `
  scale(${(zoom * 100).toFixed(3)}%) 
  translate(
    ${pos[0] - center[0]}px,
    ${pos[1] - center[1]}px
  )
  ${translateX}
  `;
}

export function InfDiv ({ pos, x, y, zoom, children, align }: infProps) {
  return (
    <div className="inf-div" style={{ transform: getTransform(pos, [x, y], zoom, align) }}>
      {children}
    </div>
  );
}

export function InfClickDiv ({ pos, x, y, zoom, children, align }: infProps) {
  return (
    <div className="inf-click-div" style={{ transform: getTransform(pos, [x, y], zoom, align) }}>
      {children}
    </div>
  );
}

