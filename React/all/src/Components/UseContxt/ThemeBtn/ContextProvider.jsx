import React from 'react';
import Toolbar from './Toolbar';

export const ThemeContext = React.createContext('light');

const ContextProvider = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
