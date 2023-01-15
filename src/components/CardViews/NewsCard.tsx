/* eslint-disable camelcase */
import { ExternalLink } from 'tabler-icons-react'
import { ArticleList } from '../../hooks/newsTypes'
import formatContet from '../../utils/formatContet'
import { truncate } from '../../utils/truncate'

const NewsCard = ({ news }: { news: ArticleList }) => {
  const { card_no, title, content, preview_url } = news

  return (
    <a
      href={`https://page.onstove.com/epicseven/global/view/${card_no}`}
      title={title}
      className='news__card'
      target='_blank'
      rel='noopener noreferrer'
    >
      {preview_url && (
        <img
          src={preview_url}
          className='h-48 w-full rounded-tl-lg rounded-tr-lg object-cover object-center md:h-auto md:w-48 md:rounded-bl-lg md:rounded-tr-none'
          alt=''
        />
      )}
      <div className='flex flex-col p-4 leading-normal'>
        <h5 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
          <ExternalLink className='inline-block text-blue-500' /> {truncate(title, 60)}
        </h5>
        <p className='mb-3 text-gray-700 dark:text-gray-400'>
          {truncate(formatContet(content), 130)}
        </p>
      </div>
    </a>
  )
}

export default NewsCard
