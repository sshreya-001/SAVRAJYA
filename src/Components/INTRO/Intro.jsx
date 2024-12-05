import React from 'react';
import './intro.css';
import img1 from '../../assets/INT2.png'; 
import { Link } from 'react-router-dom';

const Intro = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img1})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <p className="right-corner-text">"Unleash Your Imagination, </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="right-corner-text">One Story at a Time"</p>
      <Link to="/knowus" className="button-link">
        <button className="button">KNOW US MORE</button>
      </Link>
    </div>
  );
};

export default Intro;


