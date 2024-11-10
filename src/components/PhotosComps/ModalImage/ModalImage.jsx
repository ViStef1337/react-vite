import styles from './ModalImage.module.css';
import { useEffect } from 'react';

export const ModalImage = ({ largeImgSrc, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        closeModal(); // Викликаємо функцію закриття модального вікна
      }
    };

    // Додаємо слухач події
    window.addEventListener('keydown', handleKeyDown);

    // Знімаємо слухач події при демонтуванні компонента
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]); // Додаємо closeModal як залежність
  const handleClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div onClick={handleClick} className={styles.modal}>
      <div>
        <button onClick={closeModal}>close</button>
        <img src={largeImgSrc} alt="" />
      </div>
    </div>
  );
};
