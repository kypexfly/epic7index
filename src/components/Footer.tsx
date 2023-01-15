import { ExternalLink, BrandGithub } from 'tabler-icons-react'

interface linkType {
  text: string
  url: string
}

const externalLinks: linkType[] = [
  {
    text: 'Zoopido Guides',
    url: 'https://zoopido.me/',
  },
  {
    text: 'Camp Simulator',
    url: 'https://ceciliabot.github.io/',
  },
  {
    text: 'STOVE E7',
    url: 'https://page.onstove.com/epicseven/global',
  },
  {
    text: 'Epic7x',
    url: 'https://epic7x.com/',
  },
]

const resourcesLinks: linkType[] = [
  {
    text: 'Catalysts Farm Location',
    url: 'https://docs.google.com/spreadsheets/d/1UMIduFBIVc9OAoI-BeQ-LjPeihcziqXEzXw8n58bEd0/edit#gid=1343788204',
  },
  {
    text: 'Fribbel\'s Optimizer',
    url: 'https://github.com/fribbels/Fribbels-Epic-7-Optimizer',
  },
  {
    text: 'Damage Calculator',
    url: 'https://e7calc.xyz/',
  },
]

const Footer = () => {
  return (
    <footer className='bg-slate-200 text-gray-500 dark:bg-slate-800 dark:text-gray-400'>
      <div className='container mx-auto pt-10 pb-5'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-2 pt-10'>
          <div>
            <h3 className='text-xl font-bold text-gray-700 dark:text-gray-300'>Links</h3>
            <ul className='my-4'>
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <ExternalLink className='inline' size={16} /> {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-700 dark:text-gray-300'>Resources</h3>
            <ul className='my-4'>
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <ExternalLink className='inline' size={16} /> {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-700 dark:text-gray-300'>About</h3>
            <p className='text-justify'>
              Epic Seven is a mobile RPG for iOS and Android that features high-quality,
              anime-styled 2D graphics. Gameplay includes a gacha summoning system and turn-based
              combat with a wide array of collectible characters.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-700 dark:text-gray-300'>Contact</h3>
            <p className='text-justify'>
              All game content and assets are trademarks and copyrights of SUPERCREATIVE Corp and/or
              Smilegate Megaport.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-between gap-5 px-2 pt-16 pb-4'>
          <span>EPIC7INDEX 2023</span>
          <span>
            This site is fan made, not affiliated with SUPERCREATIVE Corp and/or Smilegate Megaport
          </span>
          <a
            href='https://github.com/kypexfly'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2'
          >
            <BrandGithub /> Kypexfly
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
