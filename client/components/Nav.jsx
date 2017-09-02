import React from 'react';
import Search from './Search';

const Nav = ({ handleSearchClick }) => (
  <nav className="navbar">
    <div className="row">
      <div className="col-md-6 offset-md-6">
        <Search handleSearchClick={handleSearchClick} />
      </div>
    </div>
  </nav>
);

export default Nav;
