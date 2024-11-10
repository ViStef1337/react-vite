import styles from './PixabeyPhotosList.module.css';
export const PixabeyPhotosList = ({ photos, openModal }) => {
  return (
    <ul className={styles.ul}>
      {photos.map(item => {
        return (
          <li className={styles.li} key={item.id}>
            <img
              className={styles.img}
              onClick={() => openModal(item.largeImageURL)}
              src={item.previewURL}
              alt={item.alt}
            />
          </li>
        );
      })}
    </ul>
  );
};
