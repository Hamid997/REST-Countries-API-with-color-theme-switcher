// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import Layout from './components/Layout';
import CountryDetail from './components/CountryDetail';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterOption, setFilterOption] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={
            <>
              <FilterControls
                          filterOption={filterOption}
                          setFilterOption={setFilterOption}
                          searchValue={searchValue}
                          setSearchValue={setSearchValue}
                          isDarkMode={isDarkMode}
                        />
              <Layout filterOption={filterOption} searchValue={searchValue} isDarkMode={isDarkMode} />
            </>
          } />
          <Route path="/country/:countryCode" element={
             <CountryDetail />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

