import React from 'react';
import { useNavigate } from 'react-router-dom';
import './story.css';
import ST1 from '../../assets/ST1.png';
import ST2 from '../../assets/ST2.png';
import ST3 from '../../assets/ST3.png';

const Story = () => {
  const navigate = useNavigate();

  const handleWriteNowClick = () => {
    navigate('/story-editor'); // Navigate to the story editor
  };

  return (
    <div className="read-container">
      <div className="center-heading">
        <h1>Let's Meet In a Story</h1>
      </div>
      <div className="card-container">
        <div className="story-card">
          <h2>STEP 1</h2>
          <img src={ST1} alt="Step 1" className="card-image" />
          <p>Imagine a world of yourself.</p>
        </div>
        <div className="story-card">
          <h2>STEP 2</h2>
          <img src={ST2} alt="Step 2" className="card-image" />
          <p>Pen it here in words with us and invite people to live in it.</p>
        </div>
        <div className="story-card">
          <h2>STEP 3</h2>
          <img src={ST3} alt="Step 3" className="card-image" />
          <p>Let others feel the beauty of you and your imagination.</p>
        </div>
      </div>
      <button className="read-button" onClick={handleWriteNowClick}>
        WRITE NOW
      </button>
    </div>
  );
};

export default Story;
