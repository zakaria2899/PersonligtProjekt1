import './App.css';
import '../root.css';
import NavigationBar from '../components/stateful components/navigation/navigationbar.js';
import CountryCard from '../components/stateful components/countrycard/countrycard.js';
import getRequest from '../api/data.js';
import { formatNumber } from '../root.js';
import { useEffect, useState } from 'react';
import CountryDetails from '../pages/countrydetails/CountryDetails.js';
import QueryMessage from '../components/stateless components/queryMessage/QueryMessage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setInput] = useState('');
  const [isdark, setIsdark] = useState(false);
  const [region, setRegion] = useState('');

  useEffect(() => {
    displayAllCountries();
    checkTheme();
  }, []);

  const checkTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.remove('lightmode');
      document.body.classList.add('darkmode');
      setIsdark(true);
    } else if (localStorage.getItem('theme') === 'light') {
      document.body.classList.remove('darkmode');
      document.body.classList.add('lightmode');
      setIsdark(false);
    }
  };

  const filterCountries = (countries, countryName) => {
    const filteredCountries = countries.filter((country) => {
      if (region !== '') {
        return (
          country.name.toLowerCase().includes(countryName.toLowerCase()) &&
          country.region.toLowerCase().includes(region.toLowerCase())
        );
      } else {
        return country.name.toLowerCase().includes(countryName.toLowerCase());
      }
    });
    setFilteredCountries(filteredCountries);
  };

  const displayByRegion = (countries, region) => {
    const countryByRegion = countries.filter((country) => {
      if (searchInput !== '') {
        return (
          country.region.toLowerCase().includes(region.toLowerCase()) &&
          country.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return country.region.toLowerCase().includes(region.toLowerCase());
      }
    });

    setFilteredCountries(countryByRegion);
  };

  const searchQuery = () => {
    if (filteredCountries.length <= 0 && countries.length > 0) {
      return (
        <QueryMessage
          queryMessage={'No result for your query: '}
          searchInput={searchInput}
          region={region}
        />
      );
    } else {
      return filteredCountries.map((country, index) => {
        const { flag, name, population, region, capital } = country;

        return (
          <CountryCard
            key={index}
            flag={flag}
            name={name}
            population={formatNumber(population)}
            region={region}
            capital={capital}
            latlng={country.latlng}
          />
        );
      });
    }
  };

  const displayAllCountries = async () => {
    const result = await getRequest('https://restcountries.com/v2/all');

    setCountries(result);

    setFilteredCountries(result);

    localStorage.setItem('countries', JSON.stringify(result));
  };

  return (
    <>
      <Router>
        <NavigationBar isdark={isdark} onClick={setIsdark} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                input={searchInput}
                onChange={setInput}
                filterCountries={filterCountries}
                displayByRegion={displayByRegion}
                countries={countries}
                isdark={isdark}
                onClick={setRegion}
                region={region}
                searchQuery={searchQuery}
                setInput={setInput}
              />
            }
          />
          <Route path="/countrydetails" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
