import { Dispatch, SetStateAction, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { ChevronDown, Filter } from 'tabler-icons-react'
import { FilterState } from '../pages/HeroesPage'
import { ATTRIBUTES, ROLES, ZODIACS } from '../utils/constants'
import FilterColumn from './FilterColumn'

export type FilterProps = {
  filterOptions: FilterState
  setFilterOptions: Dispatch<SetStateAction<FilterState>>
}

const allFilters = {
  attributes: Object.values(ATTRIBUTES),
  roles: Object.values(ROLES),
  rarity: [3, 4, 5],
  zodiacs: Object.values(ZODIACS),
}

const FilterMenu = ({ filterOptions, setFilterOptions }: FilterProps) => {
  const handleSetFilter = (category: string, filter: string) => {
    const newFilterOptions = {
      ...filterOptions,
    }

    if (filter === 'All' && newFilterOptions[category as keyof FilterState].has('All')) {
      newFilterOptions[category as keyof FilterState] = new Set(
        allFilters[category as keyof FilterState],
      )
      setFilterOptions(newFilterOptions)
      return
    }

    if (filter === 'All') {
      newFilterOptions[category as keyof FilterState] = new Set(['All'])
      setFilterOptions(newFilterOptions)
      return
    }

    if (!newFilterOptions[category as keyof FilterState].has(filter)) {
      newFilterOptions[category as keyof FilterState].delete('All')
      newFilterOptions[category as keyof FilterState].add(filter)
    } else {
      newFilterOptions[category as keyof FilterState].delete(filter)

      if (newFilterOptions[category as keyof FilterState].size === 0) {
        newFilterOptions[category as keyof FilterState] = new Set(['All'])
        setFilterOptions(newFilterOptions)
        return
      }
    }

    setFilterOptions(newFilterOptions)
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <button
          className='flex-inline top-0 right-0 flex items-center rounded-r-lg bg-blue-700 p-2.5 text-sm font-medium text-white outline-none hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter size={20} /> <ChevronDown size={12} />
        </button>
        <div className={isOpen ? 'filter_menu' : 'filter_menu !hidden'}>
          <FilterColumn
            filter='attributes'
            category={ATTRIBUTES}
            filterOptions={filterOptions}
            handleSetFilter={handleSetFilter}
          />
          <FilterColumn
            filter='roles'
            category={ROLES}
            filterOptions={filterOptions}
            handleSetFilter={handleSetFilter}
          />
          <FilterColumn
            filter='rarity'
            category={[3, 4, 5]}
            filterOptions={filterOptions}
            handleSetFilter={handleSetFilter}
          />
          <FilterColumn
            filter='zodiacs'
            category={ZODIACS}
            filterOptions={filterOptions}
            handleSetFilter={handleSetFilter}
          />
        </div>
      </OutsideClickHandler>
    </>
  )
}

export default FilterMenu
