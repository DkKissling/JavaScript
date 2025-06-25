import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBlog = async (id) => {
  const response = await axios.get(`http://localhost:3001/blogs/${id}`);
  return response.data;
};

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useQuery(['blog', id], () => fetchBlog(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
      <p>Likes: {blog.likes}</p>
    </div>
  );
};

export default BlogDetail;