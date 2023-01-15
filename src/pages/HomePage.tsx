import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {
  return (
    <>
      {/* <section className=' bg-slate-300 bg-cover bg-center dark:bg-slate-800'>
        <div className='container mx-auto flex min-h-[350px] flex-col items-center justify-center'>
          <h1 className='mb-4 text-center text-3xl font-extrabold text-white md:text-5xl lg:text-6xl'>
            Welcome to{' '}
            <span className='bg-gradient-to-r from-violet-500 to-sky-400 bg-clip-text text-transparent'>
              E7 Index
            </span>
          </h1>
          <TypeAnimation
            sequence={['Search heroes...', 1000, 'Search artifacts...', 1000, 'Search more!', 1000]}
            speed={60}
            className='text-center text-3xl md:text-5xl lg:text-6xl'
            wrapper='span'
            repeat={Infinity}
          />
        </div>
      </section> */}

      <section className=' bg-slate-300 bg-cover bg-center dark:bg-slate-900'>
        <div className='container mx-auto flex h-[95vh] flex-col items-center justify-center'>
          <h3 className='mb-4 text-center text-3xl font-extrabold text-white md:text-5xl lg:text-6xl'>
            <span className='bg-gradient-to-r from-violet-500 to-sky-400 bg-clip-text text-transparent'>
              Start with
            </span>
          </h3>
          <div className='flex flex-wrap'>
            <Link
              to='/news'
              className='mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
            >
              News
            </Link>
            <Link
              to='/heroes'
              className='mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
            >
              Heroes
            </Link>
            <Link
              to='/artifacts'
              className='mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
            >
              Artifacts
            </Link>
          </div>

          <TypeAnimation
            sequence={['Play smart', 1000, 'Play the animation', 1000, 'Play Epic Seven', 3000]}
            speed={60}
            className='my-10 text-center text-3xl md:text-5xl lg:text-6xl'
            wrapper='span'
            repeat={Infinity}
          />
        </div>
      </section>
    </>
  )
}

export default HomePage
