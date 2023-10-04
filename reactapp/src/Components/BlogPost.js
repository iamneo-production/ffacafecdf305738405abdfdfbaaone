import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
// import './BlogList.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data based on the id
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
    <h1 className="blog-title">{blogPost.title}</h1>
    <p className="blog-content">{blogPost.body}</p>
    <Link className="back-link" to="/blogs">
      Back to Blog List
    </Link>
    <Link className="back-link" to="/home">
      Back to Home
    </Link>
  </div>
  );
};

  // Your logic to fetch and display the specific blog post with the given id


export default BlogPost;
