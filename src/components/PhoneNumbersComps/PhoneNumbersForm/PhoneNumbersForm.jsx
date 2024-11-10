export const PhoneNumbersForm = ({ addPhoneNumber }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addPhoneNumber(
      e.target.elements.name.value,
      e.target.elements.number.value,
    );
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" />
      <input name="number" type="text" placeholder="Number" />
      <button type={'submit'}>submit</button>
    </form>
  );
};
