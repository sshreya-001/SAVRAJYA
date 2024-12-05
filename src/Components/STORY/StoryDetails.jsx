import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        } else {
          setError('Failed to fetch the story details.');
        }
      } catch (err) {
        setError('Network error. Please check your connection.');
      }
    };

    fetchStory();
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;

  return story ? (
    
    <div className="story-details">
      <h1>{story.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: JSON.parse(story.content)
            .map(
              (chap) =>
                `<h3>${chap.chapterTitle}</h3><div>${chap.content}</div>`
            )
            .join(''),
        }}
      />
    </div>
    
  ) : (
    <p>Loading story...</p>
  );
};

export default StoryDetails;
