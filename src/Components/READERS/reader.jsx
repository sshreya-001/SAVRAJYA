import React from 'react';
import './reader.css';
import img1 from '../../assets/DT3.png'
import img2 from '../../assets/DT4.png'
import img3 from '../../assets/DT7.png'
import img4 from '../../assets/DT8.png'
import { Link } from 'react-router-dom';
const Reader = () => {
  return (
    <div className="reader-container">
      <div className="center-heading">
        <h1>Souls That Live the Story</h1>
      </div>
      <div className="card-grid">
        <div className="card">
          <img src={img1} alt="" className="cards-image" />
          <h2>What if a Blog Inspires you to</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <Link to="/blogs"><button className="oval-button">READ NOW</button></Link>
        </div>
        <div className="card">
          <img src={img2} alt="" className="cards-image" />
          <h2>Someone Blogged their Heart</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <Link to="/blogs"><button className="oval-button">READ NOW</button></Link>
        </div>
        <div className="card">
          <img src={img3} alt="" className="cards-image" />
          <h2>Dive into their World</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <Link to="/stories"><button className="oval-button">READ NOW</button></Link>
        </div>
        <div className="card">
          <img src={img4} alt="" className="cards-image" />
          <h2>The Characters wait to get Known</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <Link to="/stories"><button className="oval-button">READ NOW</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Reader;
