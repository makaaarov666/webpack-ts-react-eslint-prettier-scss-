import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';

import { selectors } from 'store/stopwatchTable';

import View from './view';

const Connector = () => {
  const circleTimes = useAppSelector(selectors.getCircleTimes);

  return <View circleTimes={circleTimes} />;
};

export default Connector;
