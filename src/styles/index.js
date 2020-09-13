import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.red};
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.red};
    border-color: ${({ theme }) => theme.red} transparent
      ${({ theme }) => theme.red} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
