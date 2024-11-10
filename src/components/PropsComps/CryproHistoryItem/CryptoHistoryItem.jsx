import style from '../CryptoHistory/CryptoHistory.module.css';
import { format } from 'date-fns';

export const CryptoHistoryItem = ({ price, amount, date, id }) => {
  return (
    <>
      <td className={style.td}>{id}</td>
      <td className={style.td}>{price}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{format(date, 'dd/MM/yyyy')}</td>
    </>
  );
};
