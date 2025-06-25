import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Navigation = () => {
  const { user, dispatch } = useUser();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      {user ? (
        <>
          <Link to="/add">Add Blog</Link>
          <span>Welcome, {user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navigation;