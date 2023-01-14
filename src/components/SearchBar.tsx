import { Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Search, X } from 'tabler-icons-react'

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setSearch }: SearchProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='relative flex w-full'>
      <label className='z-10 inline-flex flex-shrink-0 items-center rounded-l-lg bg-slate-200 p-2 text-center text-sm font-medium text-gray-900 outline-none dark:bg-slate-600 dark:text-white'>
        <Search size={20} />
      </label>
      <input
        type='search'
        onChange={handleOnChange}
        placeholder='Search...'
        className='w-full p-2 outline-none dark:bg-slate-700 dark:text-slate-200'
      />
      <button
        className='z-10 inline-flex flex-shrink-0 items-center bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 dark:bg-slate-700 dark:text-white'
        onClick={() => setSearch('')}
        type='button'
      >
        <X size={20} />
      </button>
    </div>
  )
}

export default SearchBar
