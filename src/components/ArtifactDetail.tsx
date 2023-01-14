import { useFetchArtifact } from '../hooks/useFetch'
import { useAppStore } from '../store/useStore'
import skillDescription from '../utils/skillDescription'
import Loader2 from './Loader2'

const ArtifactDetail = ({ id = '' }: { id?: string }) => {
  const selectedId = useAppStore((state) => state.selectedId) || id

  const { data: artifact, isLoading, isError } = useFetchArtifact(selectedId)
  // console.log(artifact)

  if (isError)
    return (
      <div className='mr-2 rounded bg-red-100 px-2.5 py-0.5 text-red-800 dark:bg-red-200 dark:text-red-900'>
        <p>
          <strong>ERROR!</strong> Artifact not found. Try it on{' '}
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
        <img src={artifact.assets.icon} width={100} height={110} alt='' />
        <div>
          <h1 className='my-3 text-4xl'>{artifact.name}</h1>

          <p className='my-1 text-sm '>{artifact.description}</p>
        </div>
      </header>

      {/* Artifact properties */}
      <div className='mt-3 mb-5 flex max-w-[640px] flex-wrap items-center justify-evenly gap-5'>
        <span>
          <img
            src={`/assets/roles/${artifact.role}.png`}
            className='mr-1 inline-block align-middle'
            width={20}
            height={20}
            alt=''
          />
          <small> {artifact.role}</small>
        </span>
        <span>
          <img
            src={`/assets/rarity/${artifact.rarity}.png`}
            className='mr-1 inline-block h-[20px] align-middle'
            alt=''
          />
          <small> {artifact.rarity} stars</small>
        </span>
      </div>

      <hr />

      {/* Info */}
      <h2 className='text-m font-bold uppercase'>Skill description</h2>
      <p>{skillDescription(artifact.skill.description, artifact.skill.enhancements[0])}</p>

      <hr />
      <h2 className='text-m font-bold uppercase'>Stats</h2>
      <ul className='mt-4 flex list-inside flex-wrap justify-evenly gap-4 text-sm'>
        <li className='flex items-center gap-2 rounded-lg border border-gray-200 bg-slate-200 p-2 dark:border-gray-600 dark:bg-gray-700'>
          <img
            src='https://assets.epicsevendb.com/_source/img/cm_icon_stat_att.png'
            className='h-5 w-5'
          />
          <span className='font-bold'>Attack</span> {artifact.stats.attack}
        </li>
        <li className='flex items-center gap-2 rounded-lg border border-gray-200 bg-slate-200 p-2 dark:border-gray-600 dark:bg-gray-700'>
          <img
            src='https://assets.epicsevendb.com/_source/img/cm_icon_stat_max_hp.png'
            className='h-5 w-5'
          />
          <span className='font-bold'>Health</span> {artifact.stats.health}
        </li>
      </ul>

      <hr />

      <h2 className='text-m font-bold uppercase'>Illustration</h2>
      <div className='my-3 flex justify-center'>
        <img width={378} height={598} src={artifact.assets.image} alt='' />
      </div>
    </>
  )
}

export default ArtifactDetail
