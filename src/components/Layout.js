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
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' /> */}
      </Helmet>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Layout;
