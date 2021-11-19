import React from 'react';

import useInterval from 'hooks/useInterval';

import { TInnerProps } from './types';

const getTime = (differenceTime: number) => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const allSecond =
    hours * 3600 +
    minutes * 60 +
    seconds +
    milliseconds / 1000 +
    differenceTime;

  const newHours = Math.trunc(allSecond / 3600);
  const newMinutes = Math.trunc((allSecond % 3600) / 60);
  const newSecond = Math.trunc((allSecond % 3600) % 60);

  return { newHours, newMinutes, newSecond, allSecond };
};

const Controller = ({
  children,
  setTime,
  differenceTime,
}: //
React.PropsWithChildren<TInnerProps>) => {
  useInterval(() => {
    const currentTime = getTime(differenceTime);
    setTime(currentTime);
  }, 10);

  return <>{children}</>;
};

export default Controller;
