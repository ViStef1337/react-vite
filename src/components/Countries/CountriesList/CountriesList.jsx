import { Link, useLocation } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  const location = useLocation();

  return (
    <ul>
      {countries.map(item => {
        return (
          <li key={item.name.common}>
            <Link state={location} to={`/countries/${item.name.common}`}>
              <h3>{item.name.common}</h3>
              <img src={item.flags.png} alt={item.flags.alt} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
