import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './path-to/AuthContext';
import { DarkModeProvider } from './path-to/DarkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider>
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
  </AuthProvider>
</React.StrictMode>,

);

