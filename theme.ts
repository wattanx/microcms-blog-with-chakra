import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '520px',
  md: '600px',
  lg: '820px',
  xl: '1160px',
};

const semanticTokens = {
  colors: {
    borderDark: '#ccc',
    borderLight: '#eee',
    border: '#ddd',
    textMain: '#2b2c30',
  },
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints, semanticTokens });
