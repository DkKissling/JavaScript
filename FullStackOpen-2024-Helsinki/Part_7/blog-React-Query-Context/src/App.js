import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './contexts/UserContext';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogSearch from './components/BlogSearch';
import BlogDetail from './components/BlogDetail';
import Navigation from './components/Navigation';
import AddBlog from './components/AddBlog';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <div className="App">
            <Navigation />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<BlogList />} />
              <Route path="/search" element={<BlogSearch />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/add" element={<AddBlog />} /> {/* Nueva ruta */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;