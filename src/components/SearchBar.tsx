import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { Search, X } from "tabler-icons-react";

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setSearch }: SearchProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex relative w-full">
      <label className="flex-shrink-0 z-10 inline-flex items-center rounded-l-lg p-2 text-sm font-medium text-center text-gray-900 dark:text-white bg-slate-200 outline-none dark:bg-slate-600">
        <Search size={20} />
      </label>
      <input
        type="search"
        onChange={handleOnChange}
        placeholder="Search..."
        className="dark:bg-slate-700 dark:text-slate-200 outline-none w-full p-2"
      />
      <button
        className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white dark:bg-slate-700 dark:text-white"
        onClick={() => setSearch("")}
        type="button"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
