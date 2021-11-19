import React from 'react';

import { getSegmentCoordinate } from 'helpers/getSegmentCoordinate';

import TProps from './types';

import Line from './styles';

const View = ({
  center,
  radius,
  angle,
  stroke,
  strokeWidth,
  strokeOpacity = '1',
}: TProps) => {
  const radiusArrow = radius - 30;
  const { x, y } = getSegmentCoordinate({
    centerX: center,
    centerY: center,
    radius: radiusArrow,
    angleInDegrees: angle,
  });

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeOpacity={strokeOpacity}
      stroke={stroke}
    />
  );
};

export default View;
