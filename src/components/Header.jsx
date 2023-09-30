import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isDarkMode, toggleDarkMode }) {
  const icon = isDarkMode ? (
    <FontAwesomeIcon icon={faSun} className="moon-icon-light" />
  ) : (
    <FontAwesomeIcon icon={faMoon} className="moon-icon-dark" />
  );


  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div
        className={`toggle ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        onClick={toggleDarkMode}
      >
        {icon}
        <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>
      </div>
    </header>
  );
}

