import { useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') as string || 'dark')
  const switchTheme = () => {
    const inverseMode = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', inverseMode)
    setTheme(inverseMode)
  }
  return { switchTheme, theme }
}