// src/App.jsx

import React, { useState, useRef, useEffect } from 'react';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

const App = () => {
  const [blogs, setBlogs] = useState([
    // Aquí puedes agregar algunos blogs de ejemplo para comenzar
    {
      id: '1',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      user: {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
      },
    },
    {
      id: '2',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      user: {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
      },
    },
    {
      id: '3',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      user: {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
      },
    },
  ]);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  const blogFormRef = useRef();

  const notifyWith = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogin = async ({ username, password }) => {
    try {
      // Aquí deberías hacer una llamada a tu backend para autenticar al usuario
      const user = {
        username,
        name: 'Matti Luukkainen',
        token: '1234567890',
      };
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      setUser(user);
      notifyWith(`Welcome ${user.name}`);
    } catch (exception) {
      notifyWith('Wrong credentials', 'error');
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedBlogAppUser');
    notifyWith('Logged out');
  };

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility();
    setBlogs(blogs.concat(blogObject));
    notifyWith(`A new blog ${blogObject.title} by ${blogObject.author} added`);
  };

  const likeBlog = (blogToLike) => {
    const updatedBlog = {
      ...blogToLike,
      likes: blogToLike.likes + 1,
    };

    setBlogs(blogs.map((blog) => (blog.id === blogToLike.id ? updatedBlog : blog)));
  };

  const removeBlog = (blogToRemove) => {
    if (window.confirm(`Remove blog ${blogToRemove.title} by ${blogToRemove.author}`)) {
      setBlogs(blogs.filter((blog) => blog.id !== blogToRemove.id));
      notifyWith(`Blog ${blogToRemove.title} by ${blogToRemove.author} removed`);
    }
  };

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={notification} />
      {user === null ? (
        <Togglable buttonLabel="login">
          <LoginForm handleLogin={handleLogin} />
        </Togglable>
      ) : (
        <div>
          <p>
            {user.name} logged in <button onClick={handleLogout}>logout</button>
          </p>
          <Togglable buttonLabel="create new blog" ref={blogFormRef}>
            <BlogForm createBlog={addBlog} />
          </Togglable>
          {sortedBlogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              likeBlog={likeBlog}
              removeBlog={removeBlog}
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

