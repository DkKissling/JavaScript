import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './path-to/AuthContext';
import { DarkModeProvider, useDarkMode } from './path-to/DarkModeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Tareas from './components/Tareas';
import Navbar from './components/NavBar';
import './style/App.css';
import Nueva_tarea from './pages/NuevaTarea';
import './style/App.css';

const user = {
  username: 'Usuario',
  password: 'pass'
};

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { loggedIn, logout, login } = useAuth();

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
    localStorage.setItem('loggedIn', loggedIn);
  }, [isDarkMode, loggedIn]);

  return (
    <AuthProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar
              loggedIn={loggedIn}
              logout={logout}
              username={user.username}
              isDarkMode={isDarkMode}
              setIsDarkMode={toggleDarkMode}
            />
            <Routes>
              <Route path="/" element={<Home loggedIn={loggedIn} user={user} login={login}/>} />
              <Route path="/login" element={<Login user={user} login={login}/>} />
              <Route
                path="/contact"
                element={loggedIn ? <Contact /> : <Login user={user} login={login}/>}
              />
              <Route
                path="/nueva_tarea"
                element={loggedIn ? <Nueva_tarea /> : <Login user={user} login={login}/>}
              />
              <Route
                path="/tareas"
                element={loggedIn ? <Tareas /> : <Login user={user} login={login}/>}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;

