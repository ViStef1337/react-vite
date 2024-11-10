import { clsx } from 'clsx';
import styles from './FeedBackOptions.module.css';
export const FeedbackOptions = ({
  handleClick,
  resetCount,
  total,
  buttonList,
}) => {
  return (
    <ul>
      {buttonList.map(item => {
        return (
          <li key={item}>
            <button
              className={clsx(styles.btn, { [styles[item]]: item })}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          </li>
        );
      })}
      {total > 0 && (
        <li>
          <button onClick={resetCount}>reset</button>
        </li>
      )}
    </ul>
  );
};
