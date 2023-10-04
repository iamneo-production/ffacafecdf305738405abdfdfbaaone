import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import './BlogList.css'

const fetchBlogs = async () => {
  // Simulate fetching data from an API
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
  }catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

const BlogList = () => {
  const { data, isLoading, isError } = useQuery('blogs', fetchBlogs);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      {data.map(blog => (
        <div className="blog-item" key={blog.id}>
          <h2 className="blog-title">
            <Link className="blog-link" to={`/post/${blog.id}`}>
              {blog.title}
            </Link>
          </h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
