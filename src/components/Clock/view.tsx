import React from 'react';

import {
  getAngleHours,
  getAngleMinutes,
  getAngleSeconds,
} from 'src/helpers/getAngleArrow';

import ClockTicks from 'components/ClockTicks';
import ClockArrow from 'components/ClockArrow';

import TProps from './types';

import { Background, Svg } from './styles';

const width = 400;
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const radiusHourArrow = radius - 35;
const hourTickCount = 12;
const minuteTickCount = 12 * 5;

const View = ({
  incrementTime,
  decrementTime,
  currentAllSeconds,
  currentStopwatch,
}: TProps) => (
  <Background
    onMouseEnter={() => (document.body.style.overflow = 'hidden')}
    onMouseLeave={() => (document.body.style.overflow = 'scroll')} //
  >
    <Svg
      height={width}
      width={width}
      onWheel={(mouseScroll) => {
        return mouseScroll.deltaY > 0 ? incrementTime() : decrementTime(); //
      }}
    >
      <ClockTicks
        minutes={minuteTickCount}
        hours={hourTickCount}
        radius={radius}
        center={center}
      />
      <ClockArrow
        angle={getAngleHours(currentAllSeconds)}
        center={center}
        radius={radiusHourArrow}
        stroke={null}
        strokeWidth="5"
        strokeOpacity="1"
      />
      <ClockArrow
        angle={getAngleMinutes(currentAllSeconds)}
        center={center}
        radius={radius}
        strokeWidth="3"
        strokeOpacity="1"
        stroke={null}
      />
      <ClockArrow
        angle={getAngleSeconds(currentAllSeconds)}
        center={center}
        radius={radius}
        stroke="#c48d2d"
        strokeWidth="1"
        strokeOpacity="1"
      />
      <ClockArrow
        angle={getAngleSeconds(currentStopwatch)}
        center={center}
        radius={radius}
        stroke="#3383d4"
        strokeWidth="1"
        strokeOpacity="1"
      />
    </Svg>
  </Background>
);

export default View;
