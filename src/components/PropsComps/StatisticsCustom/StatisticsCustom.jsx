import style from './StatisticsCustom.module.css';
import { StatisticsItem } from '../StatisticsItem/Statisticsitem.jsx';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const StatisticsCustom = ({ title, stats }) => {
  return (
    <div className={style.container}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map((item, index) => {
          return (
            <li key={item.id} className={style.item}>
              <StatisticsItem
                Icon={icons[index]}
                title={item.title}
                total={item.total}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
