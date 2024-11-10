import style from './CryptoHistory.module.css';
import { CryptoHistoryItem } from '../CryproHistoryItem/CryptoHistoryItem.jsx';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={style.tr}>
              <CryptoHistoryItem
                price={item.price}
                amount={item.amount}
                date={item.date}
                id={item.id}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
