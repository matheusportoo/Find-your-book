import React, { createContext, useState, useContext } from 'react';
import { dark } from './dark';
import { light } from './light';

const ThemeContext = createContext();
const INITIAL_STATE = light;

export const themes = { dark, light };

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
