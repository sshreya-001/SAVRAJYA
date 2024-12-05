import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogList.css';
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
        setFilteredBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.content.toLowerCase().includes(term)
    );
    setFilteredBlogs(filtered);
  };
 
  return (
    
    <div className="blog-list-container">

      <h2>ALL OUR BLOGS</h2>
      
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {loading && <p>Loading blogs...</p>}
      {error && <p className="error-message">{error}</p>}
      
      <div className="card-container">
  {filteredBlogs.map((blog) => (
    <div className="blog-card" key={blog._id}>
       <h3>{blog.title}</h3> 
      <p dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) }}></p>
      <Link to={`/blog/${blog._id}`}>
        <button className="read-more-button">Read More</button>
      </Link>
    </div>
  ))}
</div>

     
    </div>
  );
};
export default BlogList;