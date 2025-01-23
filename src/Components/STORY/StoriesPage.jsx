// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './StoriesPage.css';

// const StoriesPage = () => {
//   const [stories, setStories] = useState([]);
//   const [error, setError] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStories = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/stories');
//         if (response.ok) {
//           const data = await response.json();
//           setStories(data);
//         } else {
//           setError('Failed to fetch stories. Please try again later.');
//         }
//       } catch (err) {
//         setError('Network error. Please check your connection.');
//       }
//     };

//     fetchStories();
//   }, []);

//   const openStory = (id) => {
//     navigate(`/stories/${id}`);
//   };

//   const filteredStories = stories.filter((story) =>
//     story.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="stories-page">
//       <h1>YOUR STORIES</h1>
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search stories by title..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-input"
//       />
//       {error ? (
//         <p className="error-message">{error}</p>
//       ) : filteredStories.length > 0 ? (
//         <div className="stories-list">
//           {filteredStories.map((story) => (
//             <div key={story._id} className="story-card">
//               <h2>{story.title}</h2>
//               <p>{story.content.slice(0, 10)}...</p>
//               <button onClick={() => openStory(story._id)} className="read-more-btn">
//                 Read More
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No stories match your search.</p>
//       )}
//     </div>
//   );
// };

// export default StoriesPage;










import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoriesPage.css';

const StoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stories');
        if (response.ok) {
          const data = await response.json();
          setStories(data);
        } else {
          setError('Failed to fetch stories. Please try again later.');
        }
      } catch (err) {
        setError('Network error. Please check your connection.');
      }
    };

    fetchStories();
  }, []);

  const openStory = (id) => {
    navigate(`/stories/${id}`);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="stories-page">
      <h1>YOUR STORIES</h1>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search stories by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {error ? (
        <p className="error-message">{error}</p>
      ) : filteredStories.length > 0 ? (
        <div className="stories-list">
          {filteredStories.map((story) => {
            const parsedContent = JSON.parse(story.content || '[]'); // Safely parse content
            const previewText =
              parsedContent?.[0]?.content?.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100) || // Remove HTML tags
              'No preview available';
            return (
              <div key={story._id} className="story-card">
                <h2>{story.title}</h2>
                <p>{previewText}...</p>
                <button
                  onClick={() => openStory(story._id)}
                  className="read-more-btn"
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No stories match your search.</p>
      )}
    </div>
  );
};

export default StoriesPage;
