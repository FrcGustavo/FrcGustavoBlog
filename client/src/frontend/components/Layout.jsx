/* eslint-disable react/prop-types */
import React from 'react';

const Layout = ({ children }) => (
  <>
    <header>Cabecera</header>
    <main>
      {children}
    </main>
  </>
);

export default Layout;
