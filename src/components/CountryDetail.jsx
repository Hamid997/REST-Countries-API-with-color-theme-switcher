import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountries } from './countries';

function CountryDetail() {
  const { countryCode } = useParams();
  const countries = getCountries();
  const country = countries.find((c) => c.alpha3Code === countryCode);

  if (!country) {
    return <div className='country-not-found'>Country not found</div>;
  }

  const safeJoin = (array, separator) => {
    if (Array.isArray(array)) {
      return array.join(separator);
    }
    return 'N/A';
  };

  return (
    <div className="country-detail">
      <Link to="/" className='Back-btn'>Back to Home</Link>
      <div className="country-data-block">
        <div className='Country-flag'>
          <img src={country.flags.svg} alt={`${country.name} Flag`} />
        </div>

        <div className='country-details'>
          <h2>{country.name}</h2>
          <div className="details-data">
            <div>
              <p>Native Name: <span>{country.nativeName}</span> </p>
              <p>Population: <span>{country.population.toLocaleString()}</span> </p>
              <p>Region:     <span>{country.region}</span> </p>
              <p>Sub Region: <span>{country.subregion}</span> </p>
              <p>Capital:    <span>{country.capital}</span> </p>
            </div>
            <div>
              <p>Top Level Domain:  <span>{safeJoin(country.topLevelDomain, ', ')}</span> </p>
              <p>Currencies:  <span>{safeJoin(country.currencies.map((currency) => currency.name), ', ')}</span> </p>
              <p>Languages:  <span>{safeJoin(country.languages.map((language) => language.name), ', ')}</span> </p>
            </div>
          </div>
          <p>Border Countries: {' '}
            {country.borders && country.borders.length > 0 ? (
              country.borders.map((border) => (
                <Link to={`/country/${border}`} key={border}>
                  <a className="Borders-links">
                    {border}
                  </a>
                </Link>
              ))
            ) : (
              <span>N/A</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;