import { createContext, useState } from 'react';

const themeStyles = {
  dark: {
    bgColor: '#222222',
    textColor: '#ffffff'
  },
  light: {
    bgColor: '#ffffff',
    textColor: '#222222'
  }
}

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}