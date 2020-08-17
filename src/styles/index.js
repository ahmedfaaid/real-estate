import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export const theme = {
  red: '#ed1c24',
  white: '#fdfffc',
  blue: '#235789',
  yellow: '#f1d302',
  black: '#020100',
  grey: '#cccccc',
  shadow: '0 5px 10px -5px'
};
