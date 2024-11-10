import { useEffect, useState } from 'react';
import { getCountries } from '../service/countriesAPI.js';
import { CountriesList } from '../components/Countries/CountriesList/CountriesList.jsx';

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Countries</h2>
      <CountriesList countries={countries} />
    </>
  );
};
