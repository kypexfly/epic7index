import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div className=" bg-slate-300 dark:bg-slate-900/75 bg-cover bg-no-repeat bg-[75%]" style={{
      backgroundImage: 'url(/assets/upper-gradient.svg)'
    }}>
      <div className="flex flex-col justify-center items-center container mx-auto min-h-[95vh]">
        <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl drop-shadow-md text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
            EPIC SEVEN INDEX
          </span>{' '}
          <sup>BETA</sup>
        </h1>

        <TypeAnimation
          sequence={[
            'Search heroes...',
            1000,
            'Search artifacts...',
            1000,
            'All in a single place!',
            3000,
          ]}
          speed={60}
          className="text-3x lmd:text-5xl lg:text-6xl"
          wrapper="span"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HomePage;
