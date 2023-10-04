import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [blogId, setBlogId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/post/${blogId}`);
  };

  const handleViewAllBlogs = () => {
    navigate('/blogs');
  };

  return (
    <div className="home-container">
    <h1>Home Page - List of Blog Posts</h1>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Enter Blog Post ID:
          <input
            className="input"
            type="number"
            value={blogId}
            onChange={event => setBlogId(event.target.value)}
          />
        </label>
        <button className="button" type="submit">
          View Blog Post
        </button>
      </form>
      <button className="button" onClick={handleViewAllBlogs}>
        View All Blogs
      </button>
    </div>
  </div>
  );
};

export default Home;
