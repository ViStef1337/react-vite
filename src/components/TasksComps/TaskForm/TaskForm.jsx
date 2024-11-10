export const TaskForm = ({ addTask }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addTask(e.target.elements.text.value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" />
      <button type={'submit'}>submit</button>
    </form>
  );
};
