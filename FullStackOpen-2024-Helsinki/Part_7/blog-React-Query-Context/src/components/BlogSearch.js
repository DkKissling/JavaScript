import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBlogs = async () => {
  const response = await axios.get('http://localhost:3001/blogs');
  return response.data;
};

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: blogs, isLoading, error } = useQuery('blogs', fetchBlogs);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Blogs</h2>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBlogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSearch;