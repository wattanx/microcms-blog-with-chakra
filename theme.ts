import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '520px',
  md: '600px',
  lg: '820px',
  xl: '1160px',
};

const colors = {
  blue: {
    500: '#3067af',
  },
};

const semanticTokens = {
  colors: {
    borderDark: '#ccc',
    borderLight: '#eee',
    border: '#ddd',
    textMain: '#2b2c30',
    textSub: '#616269',
    textOff: '#999',
    colorBgPurpleLight: '#f7f7fc',
  },
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints, colors, semanticTokens });
