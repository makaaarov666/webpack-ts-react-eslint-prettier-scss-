import { TRootState } from '../store';

const selectors = {
  getCurrentAllSecond: (state: TRootState) =>
    state.clockReducer.currentAllSeconds,
  getDifferenceTime: (state: TRootState) => state.clockReducer.differenceTime,
  getCurrentStopwatch: (state: TRootState) =>
    state.clockReducer.currentStopwatch,
  getCircleStopwatch: (state: TRootState) => state.clockReducer.circleStopwatch,
  getIsStopwatch: (state: TRootState) => state.clockReducer.isStopwatch,
};

export default selectors;
