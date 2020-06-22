import React from 'react';
import { theme } from '@chakra-ui/core';

// const breakpoints = ['30em', '48em', '62em', '80em'];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme = {
  ...theme,
  // breakpoints,
  font: {
    body: 'Inter, sans-serif',
    heading: 'Segoe UI, Segoe UI Symbol'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '48px',
    '4xl': '70px',
    '5xl': '82px'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 900
  },
  lineHeight: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  icon: {
    ...theme.icons
  },
  colors: {
    ...theme.colors,
    black: '#000000',
    gray: {
      50: '#343131'
    },
    yellow: {
      50: '#ffe27f',
      100: '#ffd64d',
      150: '#ffcb1e',
      180: '#FFCAD4'
    },
    blue: '#0E39D0'
  },
  backgroundColor: {
    ...theme.backgroundColors,
    transparent: 'transparent',
    black: {
      50: '#343131'
    },
    white: '#ffffff',
    offwhite: {
      50: '#F8F8F8',
      100: 'EDF2F7'
    },
    skin: {
      50: 'fff9db',
      100: '#ffeeaf'
    },
    jsyellow: {
      50: '#ffe27f', // Extreme lighter version don't yet know where to use.
      100: '#ffd64d', // It's used for buttons components and all those components that needs a little dark version than jsyellow-50.
      150: '#ffcb1e' // It's deep and used for background colors of main div sections like in the Early Access CTA Section, Author Cards etc.
    }
  }
};

export default customTheme;
