import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: {
      common: {
        transparentGray: string;
        gray: string;
        grayLight: string;
      };
      primary: IPalette;
      secondary: IPalette;
      side: IPalette;
    };
  }
}
