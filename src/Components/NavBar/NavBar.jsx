import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; 
const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <div className="name">SAVRAJYA</div>
      </div>
      <div className="right">
        <div className="list">
          <ul>
            <li>HOME</li>
            <li><Link to="/knowus">ABOUT-US</Link></li>
            <li><Link to="/stories">STORIES</Link></li>
            <li><Link to="/reads">READ</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
          </ul>
        </div>
        <Link to="/login">
          <button className="butt">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
