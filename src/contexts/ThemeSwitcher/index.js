import React, { useContext, useState, useEffetct, createContext, useEffect } from 'react';

const ThemeSwitcherContext = createContext();

export function useThemeSwitcherContext() {
  return useContext(ThemeSwitcherContext);
}

export function ThemeSwitcherProvider({ children }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme){
      setTheme(currentTheme);
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, [])

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeSwitcherContext.Provider>
  )
}
