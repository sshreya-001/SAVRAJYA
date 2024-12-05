import React from 'react';
import { useNavigate } from 'react-router-dom';
import './works.css';

const Works = () => {
  const navigate = useNavigate();

  const handleStartBlogging = () => {
    navigate('/create-blog');
  };
  return (
    <div className="works-container">
      <div className="centered-heading">
        <h1>Blog Yourself</h1>
      </div>
      <div className="centered-text">
        <p>
        "Where thoughts flow like rivers, ideas bloom like gardens, and every blog brings 
        new horizons to explore."
        </p>
      </div>
      <div className="button-container">
      <button className="centered-button" onClick={handleStartBlogging}> BLOG NOW
      </button>
      </div>
      
    </div>
  );
};

export default Works;
