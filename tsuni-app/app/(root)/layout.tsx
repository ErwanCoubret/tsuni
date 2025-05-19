"use client";

import React from 'react';
import Navbar from '../components/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;