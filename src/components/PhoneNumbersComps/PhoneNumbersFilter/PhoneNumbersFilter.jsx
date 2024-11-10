export const PhoneNumbersFilter = ({ handleChange }) => {
  return (
    <input
      placeholder="Filter"
      name="filter"
      type="text"
      onChange={handleChange}
    />
  );
};
