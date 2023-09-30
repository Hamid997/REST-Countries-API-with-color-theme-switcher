import React from 'react';
import DropDown from './DropDown';
import SearchInput from './SearchInput';

function FilterControls({ filterOption, setFilterOption, searchValue, setSearchValue, isDarkMode }) {
  return (
    <div className="filter-controls">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} isDarkMode={isDarkMode} />
      <DropDown filterOption={filterOption} setFilterOption={setFilterOption} isDarkMode={isDarkMode} />
    </div>
  );
}

export default FilterControls;
