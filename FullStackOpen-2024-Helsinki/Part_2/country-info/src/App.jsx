import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState(null);
  const [weatherReport, setWeatherReport] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`);
      const data = response.data;

      if (data.length > 10) {
        alert('Demasiadas coincidencias. Por favor, sé más específico en tu búsqueda.');
      } else if (data.length > 1) {
        setCountries(data);
        setCountryDetails(null);
      } else if (data.length === 1) {
        const country = data[0];
        setCountryDetails(country);
        fetchWeatherReport(country.capital);
      } else {
        alert('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchWeatherReport = async (city) => {
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      const report = `
        Temperatura: ${data.main.temp} °C,
        Descripción: ${data.weather[0].description}
      `;
      setWeatherReport(report);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleShowDetails = (countryName) => {
    const country = countries.find(c => c.name.common === countryName);
    setCountryDetails(country);
    fetchWeatherReport(country.capital);
  };

  return (
    <div className="App">
      <h1>Consulta de Países</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Buscar país..."
      />
      <button onClick={handleSearch}>Buscar</button>

      <div className="country-list">
        {countries.length > 0 &&
          countries.map((country, index) => (
            <div key={index}>
              <button onClick={() => handleShowDetails(country.name.common)}>
                {country.name.common}
              </button>
            </div>
          ))}
      </div>

      {countryDetails && (
        <div className="country-details">
          <h2>{countryDetails.name.common}</h2>
          <p>Capital: {countryDetails.capital}</p>
          <p>Área: {countryDetails.area} km²</p>
          <p>Idiomas: {Object.values(countryDetails.languages).join(', ')}</p>
          <img src={countryDetails.flags.svg} alt={`Bandera de ${countryDetails.name.common}`} width="200" />

          <div className="weather-report">
            <h3>Informe Meteorológico para {countryDetails.capital}</h3>
            <p>{weatherReport}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



