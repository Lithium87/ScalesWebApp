import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      FOOTER
    </div>
  );
};

export default Layout;
