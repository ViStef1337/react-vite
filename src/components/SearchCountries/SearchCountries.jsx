import { CountryForm } from '../CountryForm/CountryForm.jsx';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRegion } from '../../service/regionAPI.js';
import { CountriesList } from '../Countries/CountriesList/CountriesList.jsx';

export const SearchCountries = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('value');
    if (!region) {
      return;
    }
    console.log(region);
    async function fetchRegion() {
      try {
        const data = await getRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRegion();
    console.log(region);
  }, [searchParams]);
  console.log(countries);
  const search = value => {
    setSearchParams({ value });
  };
  return (
    <>
      {countries && <CountriesList countries={countries} />}
      <CountryForm search={search} />
    </>
  );
};
