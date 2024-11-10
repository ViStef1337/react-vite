import style from './PixabeyPhotosForm.module.css';
export const PixabeyPhotosForm = ({ addTask }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addTask(e.target.elements.text.value);
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.form__input} type="text" name="text" />
      <button className={style.form__btn} type={'submit'}>
        submit
      </button>
    </form>
  );
};
