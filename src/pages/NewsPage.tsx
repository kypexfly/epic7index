import NewsCard from '../components/CardViews/NewsCard'
import NewsSkeletonCard from '../components/CardViews/NewsSkeletonCard'
import { useFetchNews } from '../hooks/useFetch'

const NewsPage = () => {
  const { data: news } = useFetchNews()
  return (
    <div className='container mx-auto px-2 pt-5 pb-16'>
      <h2 className='mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl'>
        <span className='bg-gradient-to-r from-violet-500 to-sky-400 bg-clip-text text-transparent'>
          Latest
        </span>{' '}
        E7 News
      </h2>
      <p>
        Get the latest announcements for Epic Seven. News obtained from{' '}
        <a
          href='https://page.onstove.com/epicseven/global'
          className='underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          STOVE
        </a>
        .
      </p>

      <div
        className='news__list mt-10
        grid auto-rows-[minmax(200px,1fr)] grid-cols-[repeat(auto-fit,1fr)] gap-5 md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]'
      >
        {!news && <NewsSkeletonCard number={12} />}
        {news?.map((news) => (
          <NewsCard key={news.card_no} news={news} />
        ))}
      </div>
    </div>
  )
}

export default NewsPage
