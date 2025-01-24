import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './StoriesDetails.css';
import img1 from '../../assets/DT8.png';
const backgroundStyle = {
  backgroundImage: `url(${img1})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
};
const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/stories/${id}`);
        if (response.ok) {
          const data = await response.json();
          setStory(data);
        } else if (response.status === 404) {
          setError('Story not found.');
        } else {
          setError('Failed to fetch the story details.');
        }
      } catch (err) {
        setError('Network error. Please check your connection.');
      }
    };

    fetchStory();
  }, [id]);

  if (error) return <p className="story-details-error">{error}</p>;

  return story ? (
    <div style={backgroundStyle}>
    <div className="story-details-container">
      <h1 className="story-title">{story.title}</h1>
      <div
        className="story-content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            JSON.parse(story.content || '[]')
              .map(
                (chap) =>
                  `<h3>${chap.chapterTitle}</h3><div>${chap.content}</div>`
              )
              .join('')
          ),
        }}
      />
    </div>
    </div>
  ) : (
    <p className="story-details-loading">Loading story...</p>
  );
};

export default StoryDetails;
