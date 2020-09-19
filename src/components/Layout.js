import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
`;

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Real Estate</title>
      </Helmet>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Layout;
