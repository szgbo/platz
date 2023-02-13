import React from 'react';

export const getTransform = (pos: number[], center: number[], zoom: number): string => {
    return `scale(${(zoom * 100).toFixed(3)}%) translate(
      ${pos[0] - center[0]}px,
      ${pos[1] - center[1]}px
    )`;
  }
