import React from 'react';

import TProps from './types';

import Button from './styles';

const View = ({ children, onClick }: TProps) => (
  <Button onClick={onClick}>{children}</Button>
);

export default View;
