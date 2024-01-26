import 'styled-components';
import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      tertiary: string;
      error: string;
    };
    fonts: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
