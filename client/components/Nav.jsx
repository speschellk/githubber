import React from 'react';
import Search from './Search';

const Nav = ({ handleSearchInputChange }) => (
  <nav className="navbar">
    <div className="row">
      <div className="col-md-6 offset-md-6">
        <Search handleSearchInputChange={handleSearchInputChange} />
      </div>
    </div>
  </nav>
);

export default Nav;
