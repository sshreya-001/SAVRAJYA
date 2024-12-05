import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { v4 as uuidv4 } from 'uuid';
import './StoryEditor.css';
import cst1 from '../../assets/cst1.png';

const StoryEditor = () => {
  const [title, setTitle] = useState('');
  const [chapters, setChapters] = useState([
    { id: uuidv4(), chapterTitle: 'Chapter 1', content: '' },
  ]);
  const [error, setError] = useState('');
  const quillRefs = useRef({});

  const addChapter = () => {
    setChapters((prevChapters) => [
      ...prevChapters,
      { id: uuidv4(), chapterTitle: `Chapter ${prevChapters.length + 1}`, content: '' },
    ]);
  };

  const handleChapterChange = (id, newContent) => {
    setChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.id === id ? { ...chapter, content: newContent } : chapter
      )
    );
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        ['link', 'blockquote', 'image', 'video'],
      ],
    },
  };

  const publishStory = async () => {
    if (!title.trim() || chapters.some((chap) => !chap.content.trim())) {
      setError('Title and all chapters must have content.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content: JSON.stringify(chapters),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Story published:', data);
        alert('Your story has been successfully posted!');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error publishing story.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="Blog" style={{ backgroundImage: `url(${cst1})` }}>
      <div className="story-editor-container">
        <h1>WRITE YOUR STORY</h1>
        <div className="story-title">
          <label htmlFor="title">STORY TITLE</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your story title here"
          />
        </div>

        {chapters.map((chapter) => (
          <div key={chapter.id} className="chapter-container">
            <label htmlFor={`chapter-title-${chapter.id}`}>{chapter.chapterTitle}</label>
            <ReactQuill
              value={chapter.content}
              onChange={(content) => handleChapterChange(chapter.id, content)}
              modules={modules}
              placeholder={`Write content for ${chapter.chapterTitle}`}
            />
          </div>
        ))}

        <div className="story-actions">
          <button onClick={addChapter} className="add-chapter-btn">
            Add Chapter
          </button>
          <button onClick={publishStory} className="save-story-btn">
            Publish Story
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default StoryEditor;
