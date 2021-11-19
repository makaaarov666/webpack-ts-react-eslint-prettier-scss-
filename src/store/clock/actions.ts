import { createAction } from '@reduxjs/toolkit';

const setDecrementTime = createAction<number>('decrement');
const setIncrementTime = createAction<number>('increment');
const setIncrementTimeStopwatch = createAction<number>('incrementStopwatch');
const setIncrementCircleStopwatch = createAction<number>(
  'incrementCircleStopwatch',
);
const setCurrentAllSecond = createAction<number>('currentAllSecond');
const setCurrentHours = createAction<number>('currentHours');
const setCurrentMinutes = createAction<number>('currentMinutes');
const setCurrentSecond = createAction<number>('currentSecond');
const setTimeStopwatchToZero = createAction<number>('timeStopwatchToZero');
const setTimeStopwatchCurrentToZero = createAction<number>(
  'timeStopwatchCurrentToZero',
);
const setIsStopwatch = createAction<number>('isStopwatch');

export {
  setIsStopwatch,
  setDecrementTime,
  setIncrementTime,
  setIncrementTimeStopwatch,
  setTimeStopwatchToZero,
  setIncrementCircleStopwatch,
  setTimeStopwatchCurrentToZero,
  setCurrentAllSecond,
  setCurrentHours,
  setCurrentMinutes,
  setCurrentSecond,
};
