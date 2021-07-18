import React, { useContext, useState, createContext } from 'react';

const ThemeSwitcherContext = createContext();

export function useThemeSwitcherContext() {
  return useContext(ThemeSwitcherContext);
}

export function ThemeSwitcherProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeSwitcherContext.Provider>
  )
}
