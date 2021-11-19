import React from 'react';

import Clock from 'components/Clock';
import ClockStopwatch from 'components/ClockStopwatch';
import StopwatchTable from 'components/StopwatchTable';

import Wrapper from './styles';

const View = () => (
  <Wrapper>
    <Clock />
    <ClockStopwatch />
    <StopwatchTable />
  </Wrapper>
);

export default View;
