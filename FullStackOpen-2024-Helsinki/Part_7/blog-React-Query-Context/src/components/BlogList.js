import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const fetchBlogs = async () => {
  const response = await axios.get('http://localhost:3001/blogs');
  return response.data;
};

const BlogList = () => {
  const { data: blogs, isLoading, error } = useQuery('blogs', fetchBlogs);
  const { user } = useUser();
  const queryClient = useQueryClient();

  const likeMutation = useMutation(
    async (blogId) => {
      const blog = blogs.find(b => b.id === blogId);
      const updatedBlog = { ...blog, likes: blog.likes + 1 };
      await axios.put(`http://localhost:3001/blogs/${blogId}`, updatedBlog);
      return updatedBlog;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('blogs');
      },
    }
  );

  const handleLike = (blogId) => {
    likeMutation.mutate(blogId);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h3>
          <p>Author: {blog.author}</p>
          <p>Likes: {blog.likes} <button onClick={() => handleLike(blog.id)} disabled={!user}>Like</button></p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;