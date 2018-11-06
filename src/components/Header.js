import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Loss Leader Beaver</h1>
        </Link>
      </div>
    </div>
  </header>
);
// <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>

// <NavLink to="/help" activeClassName="is-active">Help</NavLink>
