import React from 'react';

import { setIncrementTime, setDecrementTime, selectors } from 'store/clock';

import { useAppSelector } from 'hooks/useAppSelector';
import { useTAppDispatch } from 'hooks/useDispatch';

import View from './view';

const Connector = () => {
  const dispatch = useTAppDispatch();

  const currentAllSeconds = useAppSelector(selectors.getCurrentAllSecond);
  const circleStopwatch = useAppSelector(selectors.getCircleStopwatch);

  return (
    <View
      incrementTime={() => dispatch(setIncrementTime())}
      decrementTime={() => dispatch(setDecrementTime())}
      currentAllSeconds={currentAllSeconds}
      currentStopwatch={circleStopwatch}
    />
  );
};

export default Connector;
