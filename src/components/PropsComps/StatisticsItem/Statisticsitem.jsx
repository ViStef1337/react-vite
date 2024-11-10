import style from '../StatisticsCustom/StatisticsCustom.module.css';

export const StatisticsItem = ({ title, total, Icon }) => {
  return (
    <>
      {<Icon className={style.svg} />}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
