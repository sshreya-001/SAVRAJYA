import React, { useState } from 'react';
import axios from 'axios';
//import ReactQuill, { Quill } from 'react-quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateBlog.css';
import WR2 from '../../assets/WR2.png';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim().length < 5 || content.trim().length < 10) {
      setErrorMessage('Title must be at least 5 characters and content at least 10 characters long.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    const blogData = { title, content };

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', blogData);
      setLoading(false);
      setSuccessMessage('Blog saved successfully!');
      setTitle('');
      setContent('');
      console.log('Blog saved successfully:', response.data);
    } catch (error) {
      setLoading(false);
      setErrorMessage('Error creating blog. Please try again.');
      console.error('Error creating blog:', error);
    }
  };
  
  const handleMediaUpload = (file, type) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_cloudinary_preset'); 

    axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/upload', formData)
      .then((response) => {
        if (type === 'image') {
          const imageUrl = response.data.secure_url;
          const range = quillRef.current.getEditor().getSelection();
          quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl);
        } else if (type === 'video') {
          const videoUrl = response.data.secure_url;
          const range = quillRef.current.getEditor().getSelection();
          quillRef.current.getEditor().insertEmbed(range.index, 'video', videoUrl);
        }
      })
      .catch((err) => {
        console.error('Media upload failed', err);
      });
  };
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      ['link', 'blockquote'],
      ['image', 'video'], 
    ],
  };

  const quillRef = React.createRef();

  return (
    <div className="Blog" style={{ backgroundImage: `url(${WR2})` }}>

    <div className="create-blog-container">
      <h2>CREATE A NEW BLOG</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="editor-container">
       
        <div className="editor">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>TITLE:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter blog title"
              />
            </div>
            <div className="form-group">
              <label>CONTENT:</label>
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                placeholder="Write your blog content here..."
              />
            </div>
          </form>
        </div>

        
        <div className="preview">
          <h3>LIVE PREVIEW:</h3>
          <h4>{title || 'Your Blog Title'}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: content || 'Your blog content will appear here...',
            }}
          ></div>
        </div>
      </div>
      
      <div className="submit-btn-container">
        <button type="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? 'Submitting...' : 'SUBMIT BLOG'}
        </button>
      </div>
      </div>
      </div>
  );
};

export default CreateBlog;