import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>Not found</h1>
      <Link to="/">Home</Link>
    </>
  );
};
