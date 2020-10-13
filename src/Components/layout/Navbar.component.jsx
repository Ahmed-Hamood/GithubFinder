import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ title, icon }) => {
  return (
    <nav className="navbar">
      <h1>
       <a href="/"> <i className={icon} aria-hidden="true"></i> {title}</a>
      </h1>
      <div className="Nav-link">
        <Link to="/"> Home </Link> |
        <Link to="/about"> About </Link>
      </div>
    </nav>
  )
}

NavBar.defaultProps = {
  title: 'GitHubFinder',
  icon: 'fa fa-github 5x'
};



export default NavBar;