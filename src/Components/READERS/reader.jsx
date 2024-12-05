import React from 'react';
import './reader.css';
import img1 from '../../assets/RD2.png'
const Reader = () => {
  return (
    <div className="reader-container">
      <div className="center-heading">
        <h1>Souls That Live the Story</h1>
      </div>
      <div className="card-grid">
        <div className="card">
          <img src={img1} alt="" className="cards-image" />
          <h2>Read Story</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <button className="oval-button">READ NOW</button>
        </div>
        <div className="card">
          <img src={img1} alt="" className="cards-image" />
          <h2>Read Story</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <button className="oval-button">READ NOW</button>
        </div>
        <div className="card">
          <img src={img1} alt="" className="cards-image" />
          <h2>Read Story</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <button className="oval-button">READ NOW</button>
        </div>
        <div className="card">
          <img src={img1} alt="" className="cards-image" />
          <h2>Read Story</h2>
          <p>"Readers are dreamers, explorers, and creators who dive into worlds crafted by imagination and words."</p>
          <button className="oval-button">READ NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Reader;
