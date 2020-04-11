import React, { Children } from 'react';

const Layout = ({ children }) => (
  <>
    <header>Cabecera</header>
    <main>
      {children}
    </main>
  </>
)

export default Layout;