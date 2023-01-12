import { ExternalLink } from "tabler-icons-react";
import { ArticleList } from "../../hooks/newsTypes";
import formatContet from "../../utils/formatContet";
import { truncate } from "../../utils/truncate";

const NewsCard = ({ news }: { news: ArticleList }) => {
  const { card_no, title, content, preview_url } = news;

  return (
    <a
      href={`https://page.onstove.com/epicseven/global/view/${card_no}`}
      key={card_no}
      title={title}
      className="news__card"
      target="_blank"
      rel="noopener noreferrer"
    >
      {preview_url && (
        <img
          src={preview_url}
          className="w-full h-48 md:h-auto md:w-48 object-cover object-center lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-lg rounded-tr-lg"
          alt=""
        />
      )}
      <div className="flex flex-col p-4 leading-normal">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        <ExternalLink className="inline-block" /> {truncate(title, 60)}
        </h5>
        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {truncate(formatContet(content), 130)}
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
