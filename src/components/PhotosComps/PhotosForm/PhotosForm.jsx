import styles from './PhotosForm.module.css';
export const PhotosForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.text.value);
    e.target.reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.form__input} name="text" type="text" />
      <button className={styles.form__btn} type={'submit'}>
        submit
      </button>
    </form>
  );
};
