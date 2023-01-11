import { useFetchNews } from "../hooks/useFetch";
import { truncate } from "../utils/truncate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import formatContet from "../utils/formatContet";

const NewsPage = () => {
  const { data: news, isLoading, isError } = useFetchNews();
  console.log(news);
  return (
    <div className="container mx-auto p-2 my-3">
      <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mb-7">
        Latest Epic Seven News
      </h2>
      <div className="news__list grid grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] gap-5">
        {news?.map((news) => (
          <a href={`https://page.onstove.com/epicseven/global/view/${news.card_no}`} key={news.card_no} className="news__card">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {news.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {truncate(formatContet(news.content))}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
