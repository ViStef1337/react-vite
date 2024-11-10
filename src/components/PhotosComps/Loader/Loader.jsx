import { MoonLoader } from 'react-spinners';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backDrop}>
      <MoonLoader color="#24e619" />
    </div>
  );
};
