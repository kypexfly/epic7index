import { useEffect, useState } from 'react'
import { ChevronLeft, ArrowsDiagonal2 } from 'tabler-icons-react'
import HeroFilterMenu from '../components/HeroFilterMenu'
import HeroDetail from '../components/HeroDetail'
import HeroesList from '../components/HeroesList'
import SearchBar from '../components/SearchBar'
import { useAppStore } from '../store/useStore'
import { Link } from 'react-router-dom'

export interface FilterState {
  attributes: Set<string>
  roles: Set<string>
  zodiacs: Set<string>
  rarity: Set<string>
}

const HeroesPage = () => {
  const [search, setSearch] = useState('')
  const [filterOptions, setFilterOptions] = useState<FilterState>({
    attributes: new Set(['All']),
    roles: new Set(['All']),
    zodiacs: new Set(['All']),
    rarity: new Set(['All']),
  })

  const [selectedId, setSelectedId] = useAppStore((state) => [
    state.selectedId,
    state.setSelectedId,
  ])
  const classNameSelected = selectedId
    ? 'hero__section visible mr-[0vw]'
    : 'hero__section invisible mr-[-100vw]'

  useEffect(() => {
    return () => setSelectedId('')
  }, [])

  return (
    <>
      <section
        className={
          selectedId
            ? 'overflow-none ml-[-100vw] flex-1 p-2 md:ml-0 md:overflow-y-auto'
            : 'flex-1 overflow-y-auto p-2'
        }
      >
        <div className='mx-auto max-w-[640px]'>
          <div className='relative flex'>
            <SearchBar setSearch={setSearch} />
            <HeroFilterMenu filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
          </div>
          <HeroesList search={search} filterOptions={filterOptions} />
        </div>
      </section>
      <section className={classNameSelected}>
        <div className='mx-auto max-w-[640px]'>
          <div className='flex justify-between'>
            <button className='action__button' type='button' onClick={() => setSelectedId('')}>
              <ChevronLeft /> back
            </button>
            {/* Open to a new page (specific to the hero) */}
            <Link to={`/heroes/${selectedId}`} className='action__button !rounded-full'>
              <ArrowsDiagonal2 className='inline' />
            </Link>
          </div>
          <HeroDetail />
        </div>
      </section>
    </>
  )
}

export default HeroesPage
