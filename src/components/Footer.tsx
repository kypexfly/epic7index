import { ExternalLink } from 'tabler-icons-react'

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
  {
    text: 'Developer',
    url: 'https://github.com/kypexfly',
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
    <footer id='footer' className='bg-slate-200 dark:bg-slate-900'>
      <div className='container mx-auto pt-10 pb-5'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-2'>
          <section>
            <h2 className='text-xl text-gray-700 dark:text-gray-400'>Links</h2>
            <ul className='text-gray-500'>
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <ExternalLink className='inline' size={16} /> {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className='text-xl text-gray-700 dark:text-gray-400'>Resources</h2>
            <ul className='text-gray-500'>
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <ExternalLink className='inline' size={16} /> {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className='text-xl text-gray-700 dark:text-gray-400'>About</h2>
            <p className='text-justify text-gray-500'>
              Epic Seven is a mobile RPG for iOS and Android that features high-quality,
              anime-styled 2D graphics. Gameplay includes a gacha summoning system and turn-based
              combat with a wide array of collectible characters.
            </p>
          </section>
          <section>
            <h2 className='text-xl text-gray-700 dark:text-gray-400'>Contact</h2>
            <p className='text-justify text-gray-500'>
              All game content and assets are trademarks and copyrights of SUPERCREATIVE Corp and/or
              Smilegate Megaport.
            </p>
            <p className='text-justify text-gray-500'>
              This site is fan made, not affiliated with SUPERCREATIVE Corp and/or Smilegate
              Megaport.
            </p>
          </section>
        </div>
        <div className='mt-10 flex justify-between px-2'>
          <span>EPIC7INDEX</span>
          <span>2023</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
