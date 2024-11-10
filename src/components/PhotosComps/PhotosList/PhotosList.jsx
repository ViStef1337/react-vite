import styles from './PhotosList.module.css';
export const PhotosList = ({ photos, imgOnClickModal }) => {
  return (
    <ul className={styles.ul}>
      {photos.map(item => {
        return (
          <li className={styles.li} key={item.id}>
            <img
              className={styles.img}
              onClick={() => imgOnClickModal(item.src.large)}
              src={item.src.small}
              alt={item.alt}
            />
          </li>
        );
      })}
    </ul>
  );
};
