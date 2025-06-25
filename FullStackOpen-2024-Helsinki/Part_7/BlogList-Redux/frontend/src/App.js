import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBlogs } from './features/blogs/blogSlice';
import { fetchUsers } from './features/users/userSlice';
import BlogList from './features/blogs/BlogList';
import Blog from './components/Blog';
import UserList from './features/users/UserList';
import User from './components/User';
import Notification from './features/notifications/Notification';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Notification />
        <Routes>
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<h1>Welcome to Blog App</h1>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;