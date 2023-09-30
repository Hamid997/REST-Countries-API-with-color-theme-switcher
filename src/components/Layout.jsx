// Layout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountries } from './countries';

function Layout({ filterOption, searchValue, isDarkMode }) {
  const countries = getCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = countries.filter((country) => {
    const regionMatchesFilter = filterOption === 'all' || country.region.toLowerCase() === filterOption.toLowerCase();
    const nameMatchesSearch = country.name.toLowerCase().includes(searchValue.toLowerCase());

    return regionMatchesFilter && nameMatchesSearch;
  });

   const handleCardClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className={`layout-cards ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        {filteredCountries.map((country) => (
          <Link
            to={`/country/${country.alpha3Code}`}
            key={country.alpha3Code}
            className={`card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            onClick={() => handleCardClick(country)}
          >
            <div className='country-card'>
              <div className="country-image">
                <img src={country.flags.svg} />
              </div>
              <div className="country-data">
                <h2>{country.name}</h2>
                <p>Population: <span>{country.population.toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Layout;