import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';
import { useTAppDispatch } from 'hooks/useDispatch';

import {
  setCurrentAllSecond,
  setCurrentHours,
  setCurrentMinutes,
  setCurrentSecond,
  selectors,
} from 'store/clock';

import { TSetTimeProps } from './types';

import Controller from './controller';

const Connector = ({ ...rest }) => {
  const dispatch = useTAppDispatch();

  const differenceTime = useAppSelector(selectors.getDifferenceTime);

  const setTime = ({
    newHours,
    newMinutes,
    newSecond,
    allSecond,
  }: TSetTimeProps) => {
    dispatch(setCurrentHours(newHours));
    dispatch(setCurrentMinutes(newMinutes));
    dispatch(setCurrentSecond(newSecond));
    dispatch(setCurrentAllSecond(allSecond));
  };

  return (
    <Controller setTime={setTime} differenceTime={differenceTime} {...rest} />
  );
};

export default Connector;
