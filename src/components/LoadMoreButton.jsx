import styles from './LoadMoreButton.module.css';
export const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={styles.load__more} onClick={onClick}>
      Load more
    </button>
  );
};
