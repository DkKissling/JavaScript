import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, likeBlog, deleteBlog } from './blogSlice';
import { setNotification } from '../notifications/notificationSlice';

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
    dispatch(likeBlog(id));
    dispatch(setNotification('Blog liked!'));
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    dispatch(setNotification('Blog deleted!'));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <span>{blog.title} by {blog.author}</span>
          <button onClick={() => handleLike(blog.id)}>like</button>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
