import React from 'react';

import { TProps } from './types';

import { Button, Background } from './styles';

const View = ({
  setIsStopwatch,
  isStopwatch,
  btnAddCircleTime,
  btnClearCircleTimes,
}: TProps) => (
  <Background>
    <Button onClick={isStopwatch ? btnAddCircleTime : btnClearCircleTimes}>
      {isStopwatch ? 'круг' : 'сброс'}
    </Button>
    <Button onClick={() => setIsStopwatch()}>
      {isStopwatch ? 'стоп' : 'старт'}
    </Button>
  </Background>
);

export default View;
