import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/LOGO.png';  // Update with your logo file path

const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="left">
        {/* Logo image */}
        <img src={logo} alt="SAVRAJYA Logo" className="logo" />
      </div>
      <div className="right">
        <div className="list">
          <ul>
            <li><Link to="/intro">HOME</Link></li>
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

