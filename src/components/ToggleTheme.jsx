import "@theme-toggles/react/css/Classic.css"
import { useState, useEffect } from 'react';
import { Classic } from '@theme-toggles/react'

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }

  return (
    <div className="fixed top-4 right-4 flex justify-end items-center gap-2">
      <p className="font-semibold">{ theme === 'light' ? 'Light' : 'Dark' }</p>
      <Classic
        duration={ 500 }
        toggled={ theme === 'dark' }
        toggle={ toggleTheme }
        className="text-4xl cursor-pointer"
      />
    </div>
  )
}

export default ToggleTheme