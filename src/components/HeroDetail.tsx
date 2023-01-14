import Loader2 from '../components/Loader2'
import { useFetchHero } from '../hooks/useFetch'
import { useAppStore } from '../store/useStore'
import skillDescription from '../utils/skillDescription'

const HeroDetail = ({ id = '' }: { id?: string }) => {
  const selectedId = useAppStore((state) => state.selectedId) || id

  const { data: hero, isLoading, isError } = useFetchHero(selectedId)
  // console.log(hero)

  if (isError)
    return (
      <div className='mr-2 rounded bg-red-100 px-2.5 py-0.5 text-red-800 dark:bg-red-200 dark:text-red-900'>
        <p>
          <strong>ERROR!</strong> Hero not found. Try it on{' '}
          <a className='underline' href='https://epic7x.com/'>
            Epic7x!
          </a>
        </p>
      </div>
    )

  if (isLoading) return <Loader2 />

  return (
    <>
      {/* Header */}
      <header className='flex min-h-[7rem] w-full items-center gap-5'>
        <img src={hero.assets.icon} width={100} height={110} alt='' />
        <div>
          <h1 className='my-3 text-4xl'>
            {hero.name} <span className='badge-gray'>{hero.id}</span>
          </h1>

          <p className='my-1 text-sm '>{hero.description}</p>
        </div>
      </header>

      {/* Hero properties */}
      <div className='mt-3 mb-5 flex max-w-[640px] flex-wrap items-center justify-evenly gap-5'>
        <span>
          <img
            src={`/assets/attributes/${hero.attribute}.png`}
            className='mr-1 inline-block align-middle'
            width={20}
            height={20}
            alt=''
          />
          <small> {hero.attribute}</small>
        </span>
        <span>
          <img
            src={`/assets/roles/${hero.role}.png`}
            className='mr-1 inline-block align-middle'
            width={20}
            height={20}
            alt=''
          />
          <small> {hero.role}</small>
        </span>
        <span>
          <img
            src={`/assets/zodiacs/${hero.zodiac}.png`}
            className='mr-1 inline-block align-middle'
            width={20}
            height={20}
            alt=''
          />
          <small>{hero.zodiac}</small>
        </span>
        <span>
          <img
            src={`/assets/rarity/${hero.rarity}.png`}
            className='mr-1 inline-block h-[20px] align-middle'
            alt=''
          />
          <small> {hero.rarity} stars</small>
        </span>
      </div>

      <hr />

      {/* Info */}
      <h2 className='text-m font-bold uppercase'>{hero.name}&apos;s story</h2>
      <p>{hero.story}</p>

      <hr />

      {/* Skills */}
      <div className='flex flex-col gap-3'>
        <h2 className='text-m font-bold uppercase'>Skills</h2>
        {hero.skills.map((skill) => (
          <div className='skill__card' key={skill._id}>
            <img src={skill.assets.icon} width={82} height={84} alt='' />
            <div>
              <h3 className='text-xl'>{skill.name} </h3>
              {skill.passive && <span className='badge-gray'>Passive</span>}
              {skill.soul_gain !== 0 ? (
                <span className='badge-gray'>+{skill.soul_gain} souls</span>
              ) : null}
              {skill.cooldown !== 0 ? (
                <span className='badge-gray'>{skill.cooldown} turn cooldown</span>
              ) : null}
              <p className='mt-3 text-sm '>
                {skillDescription(skill.description, skill.values, 0)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2 className='text-m font-bold uppercase'>Specialty Skill</h2>
      <div className='flex w-full items-center gap-5 py-4'>
        <img src={hero.specialty.assets.icon} width={74} height={74} alt='' />
        <div>
          <h3 className='text-xl'>{hero.specialty.name}</h3>

          <p className='my-1 text-sm '>{hero.specialty.description}</p>
          {hero.specialty.type && <span className='badge-gray'>{hero.specialty.type.name} </span>}
          {hero.specialty.effect_type && (
            <span className='badge-gray'>
              {hero.specialty.effect_type === 'reward_bonus' ? 'Reward Bonus' : 'Time Reduce'}{' '}
              {hero.specialty.effect_value * 100}%
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default HeroDetail
