const NewsSkeletonCard = ({ number }: { number: number }) => {
  return (
    <>
      {Array(number)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className='flex animate-pulse flex-col rounded-lg bg-slate-200 dark:bg-gray-700 md:flex-row'
          >
            <div
              className='h-48 w-full rounded-tl-lg rounded-tr-lg bg-slate-100 object-cover object-center dark:bg-gray-600 md:h-auto md:w-48 
            md:rounded-bl-lg md:rounded-tr-none'
            />

            <div className='flex flex-1 flex-col p-4 leading-normal'>
              <div className='h-8 min-w-full animate-pulse rounded-lg bg-slate-100 text-lg dark:bg-gray-600' />
              <p className='mb-3'></p>
            </div>
          </div>
        ))}
    </>
  )
}

export default NewsSkeletonCard
