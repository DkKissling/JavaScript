import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addBlog } from './blogSlice';

const NewBlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(addBlog({ title, author, url }));
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Author:
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>
      <br />
      <label>
        URL:
        <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default NewBlogForm;