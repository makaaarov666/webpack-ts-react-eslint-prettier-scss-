import { createReducer } from '@reduxjs/toolkit';

import { addCircleTime, clearCircleTimes } from './actions';

import { TStopwatchTableState, TAddCircleTime } from './types';

const initialState: TStopwatchTableState = {
  circleTimes: [],
};

const handlers = {
  [addCircleTime.type]: (
    state: TStopwatchTableState,
    { payload }: TAddCircleTime,
  ) => {
    state.circleTimes.push(payload);
  },
  [clearCircleTimes.type]: (state: TStopwatchTableState) => {
    state.circleTimes = [];
  },
};

const reducer = createReducer(initialState, handlers);

export { reducer, addCircleTime, clearCircleTimes };
