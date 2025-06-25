import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleBlog } from '../features/blogs/blogSlice';

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(state => state.blogs.currentBlog);
  const status = useSelector(state => state.blogs.status);
  const error = useSelector(state => state.blogs.error);

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>URL: {blog.url}</p>
      <p>Likes: {blog.likes}</p>
      <h3>Comments</h3>
      <ul>
        {blog.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;