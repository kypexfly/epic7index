import NewsCard from '../components/CardViews/NewsCard';
import { useFetchNews } from '../hooks/useFetch';

const NewsPage = () => {
  const { data: news } = useFetchNews();
  return (
    <div className="container mx-auto p-2 mt-3 mb-20">
      <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mb-7">
        Latest Epic Seven News
      </h2>
      <p>Get the latest announcements for Epic Seven. News obtained from <a href="https://page.onstove.com/epicseven/global" className="underline" target="_blank" rel="noopener noreferrer">STOVE</a>.</p>
      <hr className="border-b border-slate-400 dark:border-slate-700" />
      <div className="news__list 
        grid 
        md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))] 
        grid-cols-[repeat(auto-fit,1fr)]
        auto-rows-fr
        gap-5">

        {news?.map((news) => (
          <NewsCard key={news.card_no} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
