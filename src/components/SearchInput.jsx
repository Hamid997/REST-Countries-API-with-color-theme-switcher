import React from 'react';
import SearchIcon from '../assets/SearchIcon.svg'

function SearchInput({ searchValue, setSearchValue, isDarkMode }) {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`search-input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img src={SearchIcon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchInput;