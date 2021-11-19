import React from 'react';

import {
  setIncrementTimeStopwatch,
  setTimeStopwatchToZero,
  setIncrementCircleStopwatch,
  setTimeStopwatchCurrentToZero,
  setIsStopwatch,
  selectors,
} from 'store/clock';

import { addCircleTime, clearCircleTimes } from 'store/stopwatchTable';

import { useAppSelector } from 'hooks/useAppSelector';
import { useTAppDispatch } from 'hooks/useDispatch';

import Controller from './controller';

const Connector = () => {
  const dispatch = useTAppDispatch();

  const isStopwatch = useAppSelector(selectors.getIsStopwatch);
  const circleStopwatch = useAppSelector(selectors.getCircleStopwatch);

  return (
    <Controller
      circleStopwatch={circleStopwatch}
      isStopwatch={isStopwatch}
      incrementTimeStopwatch={() => dispatch(setIncrementTimeStopwatch())}
      setIncrementCircleStopwatch={() =>
        dispatch(setIncrementCircleStopwatch())
      }
      clearCircleTimes={() => dispatch(clearCircleTimes())}
      addCurrentCircleTime={(circleStopWatchTime: number) =>
        dispatch(addCircleTime(circleStopWatchTime))
      }
      setTimeStopwatchCurrentToZero={() =>
        dispatch(setTimeStopwatchCurrentToZero())
      }
      setTimeStopwatchToZero={() => dispatch(setTimeStopwatchToZero())}
      setIsStopwatch={() => dispatch(setIsStopwatch())}
    />
  );
};

export default Connector;
