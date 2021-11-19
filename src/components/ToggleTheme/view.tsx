import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import Button from 'components/ToggleThemeButton';

import TProps from './types';

import GlobalStyle from 'styles/global';

const View = ({ theme, updateTheme }: TProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button onClick={updateTheme}>Toggle Theme</Button>
      <Layout />
    </ThemeProvider>
  );
};

export default View;
