import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
const DarkModeContext = createContext();

// Proveedor de contexto para el modo oscuro
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Función para cambiar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Proporcionamos el estado y la función de cambio en el valor del contexto
  const contextValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del modo oscuro
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode debe ser utilizado dentro de un DarkModeProvider');
  }
  return context;
};
