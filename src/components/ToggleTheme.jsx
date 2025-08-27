import "@theme-toggles/react/css/Classic.css";
import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react"

const ToggleTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('vfh_theme') || 'light'
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('vfh_theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('vfh_theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }

  return (
    <div className="fixed top-4 right-4 flex justify-end">
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-accent/70 backdrop-blur-sm cursor-pointer"
      >
        <p className="font-semibold select-none">
          {theme === "light" ? "Light" : "Dark"}
        </p>
        <Classic
          duration={500}
          toggled={theme === "dark"}
          // quitamos toggle aquí porque ya lo maneja el button
          className="text-4xl pointer-events-none"
        />
      </button>
    </div>
  )
}

export default ToggleTheme