import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, likeBlog, deleteBlog } from './blogSlice';
import NewBlogForm from './NewBlogForm';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);
  const status = useSelector(state => state.blogs.status);
  const error = useSelector(state => state.blogs.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);
  
  const handleLike = (id) => {
    console.log('Liking blog with id:', id);  
    dispatch(likeBlog(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-list-container">
      <h2>Blogs</h2>
      <NewBlogForm />
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <Link to={`/blogs/${blog._id}`} className="blog-title">{blog.title}</Link>
          <span className="blog-author">por {blog.author}</span>
          <button onClick={() => handleLike(blog._id)}>Like ({blog.likes})</button>
          <button onClick={() => handleDelete(blog._id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;