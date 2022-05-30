import { Link, NavLink } from "react-router-dom";
import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    const {user,onLogout} = this.props;
    
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Steel Steel
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      {user && user.isAdmin && <NavLink className="nav-item nav-link" to="/movies">
          Steel Steel Admin
        </NavLink>}
        {user && <NavLink className="nav-item nav-link" to="/customers">
          Whole Sale List
        </NavLink>}
        {user &&<NavLink className="nav-item nav-link" to="/rentals">
          Retail List
        </NavLink>}
        {user &&<button
        onClick={() => {localStorage.clear()},onLogout}
        className="btn btn-danger btn-sm ml-5"
      >
        logout
      </button>}
      </div>
    </div>
  </nav>
  }
}

export default NavBar;
