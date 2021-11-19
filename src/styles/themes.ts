import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  name: 'light',
  palette: {
    common: {
      transparentGray: '#223c5033',
      gray: '#555555',
      grayLight: '#f0f0f0',
    },
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    side: {
      main: '#f0f0f0',
      contrastText: '4px 4px 8px 0px #223c5033',
    },
  },
};

const secondaryTheme = (theme: DefaultTheme) => ({
  name: 'dark',
  palette: {
    ...theme.palette,
    primary: {
      main: '#323336',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    side: {
      main: '#2a44ff',
      contrastText: '4px 4px 8px 0px #00000099',
    },
  },
});

export { defaultTheme, secondaryTheme };
