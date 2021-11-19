import React from 'react';

import useInterval from 'hooks/useInterval';

import { TInnerProps } from './types';

import View from './view';

const Controller = ({
  isStopwatch,
  incrementTimeStopwatch,
  setIncrementCircleStopwatch,
  circleStopwatch,
  setTimeStopwatchToZero,
  setTimeStopwatchCurrentToZero,
  addCurrentCircleTime,
  clearCircleTimes,
  ...rest
}: TInnerProps) => {
  const patternTime = (time: number) => Math.floor(time * 1000) / 1000;

  const btnAddCircleTime = () => {
    setTimeStopwatchToZero();
    addCurrentCircleTime(patternTime(circleStopwatch));
  };

  const btnClearCircleTimes = () => {
    setTimeStopwatchCurrentToZero();
    clearCircleTimes();
  };

  useInterval(() => {
    if (!isStopwatch) {
      return null;
    }

    incrementTimeStopwatch();
    setIncrementCircleStopwatch();
  }, 10);

  return (
    <View
      btnAddCircleTime={btnAddCircleTime}
      btnClearCircleTimes={btnClearCircleTimes}
      isStopwatch={isStopwatch}
      {...rest}
    />
  );
};

export default Controller;
