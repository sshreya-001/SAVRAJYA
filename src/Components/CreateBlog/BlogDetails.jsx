import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';
const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Error fetching blog details.';
        setError(errorMessage);
        console.error('Fetch Error:', err);
        
      }
    };
  
    fetchBlogDetail();
  }, [id]);
  

  if (error) {
    return <div className="blog-detail-error">{error}</div>;
  }

  if (!blog) {
    return <div className="blog-detail-loading">Loading...</div>;
  }

  return (
    <div className="blog-detail-container">
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
};

export default BlogDetails;
