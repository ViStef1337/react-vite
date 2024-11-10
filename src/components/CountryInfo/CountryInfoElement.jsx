export const CountryInfoElement = ({ country }) => {
  return (
    <div>
      <h1>{country[0].name.common}</h1>
      <img src={country[0].flags.png} alt={country[0].flags.alt} />
      <h2>Capital {country[0].capital}</h2>
    </div>
  );
};
