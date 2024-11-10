import { BlogCard } from '../../components/PropsComps/BlogCard/BlogCard.jsx';
import article from '../../data/article.json';
import { ForbesList } from '../../components/PropsComps/ForbesList/ForbesList.jsx';
import forbes from '../../data/forbes.json';
import { StatisticsCustom } from '../../components/PropsComps/StatisticsCustom/StatisticsCustom.jsx';
import stats from '../../data/stats.json';
import { CryptoHistory } from '../../components/PropsComps/CryptoHistory/CryptoHistory.jsx';
import transactions from '../../data/transactions.json';

const Props = () => {
  return (
    <>
      {' '}
      <BlogCard
        name={article.name}
        postedAt={article.postedAt}
        poster={article.poster}
        tag={article.tag}
        title={article.title}
        description={article.description}
        avatar={article.avatar}
      />
      <ForbesList list={forbes} />
      <StatisticsCustom title="Main Statistics" stats={stats} />
      <CryptoHistory items={transactions} />;
    </>
  );
};

export default Props;
