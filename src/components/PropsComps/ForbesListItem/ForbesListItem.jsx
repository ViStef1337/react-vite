import style from './ForbesListItem.module.css';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

export const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>{capital}</span>
      <BiDollarCircle color="#2196f3" size={22} />
      {isIncrease ? (
        <FcBullish className={style.forbesSvg} />
      ) : (
        <FcBearish className={style.forbesSvg} />
      )}
    </>
  );
};
