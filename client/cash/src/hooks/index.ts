import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme') as string)|| 'dark')
  const switchTheme = () =>{
    const inverseMode = theme ==='dark'?'light':'dark'
    localStorage.setItem('theme', JSON.stringify(inverseMode))
     setTheme(inverseMode)
  }
 return {switchTheme, theme}
}