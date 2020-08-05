import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* Replace line below with react-helmet injection */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

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
};
