import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const { user } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addBlogMutation = useMutation(
    async (newBlog) => {
      const response = await axios.post('http://localhost:3001/blogs', newBlog);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('blogs');
        navigate('/');
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to add a blog');
      return;
    }
    addBlogMutation.mutate({ title, author, url, likes: 0, userId: user.id });
  };

  return (
    <div className="add-blog">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL:</label>
          <input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;