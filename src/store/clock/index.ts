import {
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
  setTimeStopwatchCurrentToZero,
  setIsStopwatch,
} from './reducer';
import selectors from './selectors';

export {
  setDecrementTime,
  setIncrementTime,
  setCurrentAllSecond,
  setCurrentHours,
  setCurrentMinutes,
  setCurrentSecond,
  selectors,
  setIncrementTimeStopwatch,
  setTimeStopwatchToZero,
  setIncrementCircleStopwatch,
  setIsStopwatch,
  setTimeStopwatchCurrentToZero,
};
export default reducer;
