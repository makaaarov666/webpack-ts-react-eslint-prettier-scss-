type TInnerProps = {
  circleStopwatch: number;
  isStopwatch: boolean;
  incrementTimeStopwatch: () => void;
  setTimeStopwatchToZero: () => void;
  setIncrementCircleStopwatch: () => void;
  setIsStopwatch: () => void;
  setTimeStopwatchCurrentToZero: () => void;
  addCurrentCircleTime: (circleStopWatchTime: number) => void;
  clearCircleTimes: () => void;
};

type TProps = {
  isStopwatch: boolean;
  setIsStopwatch: () => void;
  btnAddCircleTime: () => void;
  btnClearCircleTimes: () => void;
};

export { TInnerProps, TProps };
