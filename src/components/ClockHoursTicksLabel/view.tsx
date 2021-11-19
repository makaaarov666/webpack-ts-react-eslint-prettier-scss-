import React from 'react';

import { getSegmentCoordinate } from 'helpers/getSegmentCoordinate';

import TProps from './types';

import { Line, Text } from './styles';

const View = ({ radius, center, hours }: TProps) => {
  const hoursArray = [];

  for (let i = 0; i < hours; i++) {
    hoursArray.push(i);
  }

  const hourSticks = hoursArray.map((hour, index) => {
    const hoursNumeral = index + 1;
    const startRadius = radius - 20;
    const endRadius = radius + 5;
    const timeRadius = radius - 35;
    const angleInDegrees = index * 30 + 30;

    const coordinates = (radius: number) =>
      getSegmentCoordinate({
        centerX: center,
        centerY: center,
        radius: radius,
        angleInDegrees,
      });

    return (
      <g key={index}>
        <Line
          strokeWidth={3}
          strokeLinecap="round"
          x1={coordinates(startRadius).x}
          x2={coordinates(endRadius).x}
          y1={coordinates(startRadius).y}
          y2={coordinates(endRadius).y}
        />
        <Text
          textAnchor="middle"
          fontSize="17"
          fontWeight="bold"
          alignmentBaseline="central"
          x={coordinates(timeRadius).x}
          y={coordinates(timeRadius).y}
        >
          {hoursNumeral}
        </Text>
      </g>
    );
  });

  return <g>{hourSticks}</g>;
};

export default View;
