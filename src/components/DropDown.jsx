import React from 'react';

function DropDown({ filterOption, setFilterOption, isDarkMode }) {
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <div className={`filter-dropdown ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <select id="filter" value={filterOption} onChange={handleFilterChange}>
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default DropDown;
