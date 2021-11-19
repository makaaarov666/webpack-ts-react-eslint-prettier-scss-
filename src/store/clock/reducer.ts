import { createReducer } from '@reduxjs/toolkit';

import {
  setDecrementTime,
  setIncrementTime,
  setCurrentAllSecond,
  setCurrentHours,
  setCurrentMinutes,
  setCurrentSecond,
  setIncrementTimeStopwatch,
  setTimeStopwatchToZero,
  setIncrementCircleStopwatch,
  setTimeStopwatchCurrentToZero,
  setIsStopwatch,
} from './actions';

import { TClockState, TTimePayload } from './types';

const initialState: TClockState = {
  isStopwatch: false,
  circleStopwatch: 0,
  currentStopwatch: 0,
  currentHours: 0,
  currentMinutes: 0,
  currentSeconds: 0,
  currentAllSeconds: 0,
  differenceTime: 0,
};

const handlers = {
  [setCurrentHours.type]: (state: TClockState, { payload }: TTimePayload) => {
    state.currentHours = payload;
  },
  [setCurrentMinutes.type]: (state: TClockState, { payload }: TTimePayload) => {
    state.currentMinutes = payload;
  },
  [setCurrentSecond.type]: (state: TClockState, { payload }: TTimePayload) => {
    state.currentSeconds = payload;
  },
  [setCurrentAllSecond.type]: (
    state: TClockState,
    { payload }: TTimePayload,
  ) => {
    state.currentAllSeconds = payload;
  },
  [setIncrementTime.type]: (state: TClockState) => {
    state.differenceTime = state.differenceTime + 1;
  },
  [setDecrementTime.type]: (state: TClockState) => {
    state.differenceTime = state.differenceTime - 1;
  },
  [setIncrementTimeStopwatch.type]: (state: TClockState) => {
    state.currentStopwatch = state.currentStopwatch + 0.01;
  },
  [setIncrementCircleStopwatch.type]: (state: TClockState) => {
    state.circleStopwatch = state.circleStopwatch + 0.01;
  },
  [setTimeStopwatchToZero.type]: (state: TClockState) => {
    state.circleStopwatch = 0;
  },
  [setTimeStopwatchCurrentToZero.type]: (state: TClockState) => {
    state.circleStopwatch = 0;
  },
  [setIsStopwatch.type]: (state: TClockState) => {
    state.isStopwatch = !state.isStopwatch;
  },
};

const reducer = createReducer(initialState, handlers);

export {
  reducer,
  setDecrementTime,
  setIncrementTime,
  setCurrentAllSecond,
  setCurrentHours,
  setCurrentMinutes,
  setCurrentSecond,
  setIncrementTimeStopwatch,
  setTimeStopwatchToZero,
  setIncrementCircleStopwatch,
  setIsStopwatch,
  setTimeStopwatchCurrentToZero,
};
