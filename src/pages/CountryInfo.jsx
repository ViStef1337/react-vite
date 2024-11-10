import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountry } from '../service/countryAPI.js';
import { CountryInfoElement } from '../components/CountryInfo/CountryInfoElement.jsx';

export const CountryInfo = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountry(countryId);
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Link to={location.state || '/'}>back to countries</Link>
      {country && <CountryInfoElement country={country} />}
    </>
  );
};
