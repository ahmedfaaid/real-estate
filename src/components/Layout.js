import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ width: '100%' }}>{children}</div>
    </>
  );
}

export default Layout;
