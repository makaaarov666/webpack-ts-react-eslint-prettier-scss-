import React from 'react';

import ClockMinutesTicks from 'components/ClockMinutesTicks';
import ClockHoursTicksLabel from 'components/ClockHoursTicksLabel';

import TProps from './types';

const View = ({ radius, center, minutes, hours }: TProps) => (
  <>
    <ClockMinutesTicks radius={radius} center={center} minutes={minutes} />
    <ClockHoursTicksLabel radius={radius} center={center} hours={hours} />
  </>
);

export default View;
