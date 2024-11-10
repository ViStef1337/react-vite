import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="countries">Countries</Link>
          </li>
          <li>
            <Link to="searchCountries">Search countries</Link>
          </li>
          <li>
            <Link to="pixabey">Pixabey</Link>
          </li>
          <li>
            <Link to="photos">Photos</Link>
          </li>
          <li>
            <Link to="phoneNumbers">PhoneNumbers</Link>
          </li>
          <li>
            <Link to="tasks">Tasks</Link>
          </li>
          <li>
            <Link to="feedBack">FeedBack</Link>
          </li>
          <li>
            <Link to="points">Pointss</Link>
          </li>
          <li>
            <Link to="props">Props</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
