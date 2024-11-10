const regions = ['africa', 'america', 'asia', 'europe', 'oceania'];
export const CountryForm = ({ search }) => {
  const hendleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.text;
    if (regions.includes(value.toLowerCase())) {
      search(value);
    } else alert('error');
    search(e.target.text.value);
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input name="text" type="text" />
      <button type={'submit'}>search</button>
    </form>
  );
};
