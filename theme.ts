import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '520px',
  md: '600px',
  lg: '820px',
  xl: '1160px',
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints });
