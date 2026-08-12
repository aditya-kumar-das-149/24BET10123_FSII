import React from 'react';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme} 
        className="btn-primary px-6 py-2 rounded-full font-bold text-sm"
        aria-label="Toggle theme"
      >
        {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;