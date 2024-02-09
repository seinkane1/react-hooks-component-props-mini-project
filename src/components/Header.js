import React from 'react';
import Header from './Header.js';

const Header = ({ blogName }) => {
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
};

export default Header;

