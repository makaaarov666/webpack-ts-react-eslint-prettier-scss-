import React from 'react';

import { getSegmentCoordinate } from 'helpers/getSegmentCoordinate';

import TProps from './types';

import Line from './styles';

const View = ({ radius, center, minutes }: TProps) => {
  const minutesArray = [];

  for (let i = 0; i < minutes; i++) {
    minutesArray.push(i);
  }

  const minuteSticks = minutesArray.map((minute, index) => {
    const startRadius = radius - 5;
    const endRadius = radius + 5;
    const angleInDegrees = index * 6;

    const coordinates = (radius: number) =>
      getSegmentCoordinate({
        centerX: center,
        centerY: center,
        radius: radius,
        angleInDegrees,
      });

    return (
      <Line
        strokeWidth={2}
        strokeLinecap="round"
        key={index}
        x1={coordinates(startRadius).x}
        x2={coordinates(endRadius).x}
        y1={coordinates(startRadius).y}
        y2={coordinates(endRadius).y}
      />
    );
  });

  return <g>{minuteSticks}</g>;
};

export default View;
