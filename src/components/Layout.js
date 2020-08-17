import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Header />
      <div style={{ width: '100%' }}>{children}</div>
    </>
  );
}

export default Layout;
