import { useEffect, useState } from "react";
import { ArrowsMaximize, ChevronLeft } from "tabler-icons-react";
import FilterMenu from "../components/FilterMenu";
import HeroDetail from "../components/HeroDetail";
import HeroesList from "../components/HeroesList";
import SearchBar from "../components/SearchBar";
import { useAppStore } from "../store/useStore";

export interface FilterState {
  attributes: Set<string>;
  roles: Set<string>;
  zodiacs: Set<string>;
  rarity: Set<string>;
}

const HeroesPage = () => {
  const [search, setSearch] = useState("");
  const [filterOptions, setFilterOptions] = useState<FilterState>({
    attributes: new Set(["All"]),
    roles: new Set(["All"]),
    zodiacs: new Set(["All"]),
    rarity: new Set(["All"]),
  });

  const [selectedId, setSelectedId] = useAppStore((state) => [
    state.selectedId,
    state.setSelectedId,
  ]);
  const classNameSelected = selectedId
    ? "overflow-y-auto flex-1 transition-all duration-300 border-l border-slate-400 dark:border-slate-700 p-2 visible mr-[0vw]"
    : "overflow-y-auto flex-1 transition-all duration-300 border-l border-slate-400 dark:border-slate-700 p-2 invisible mr-[-100vw]";

  useEffect(() => {
    return () => setSelectedId("");
  }, []);

  return (
    <>
      <section className="overflow-y-auto flex-1 p-2">
        <div className="max-w-[640px] mx-auto">
          <div className="flex relative">
            <SearchBar setSearch={setSearch} />
            <FilterMenu
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          </div>
          <HeroesList search={search} filterOptions={filterOptions} />
        </div>
      </section>
      <section className={classNameSelected}>
        <div className="max-w-[640px] mx-auto">
          <div className="flex justify-between">
          <button className="action__button" type="button" onClick={() => setSelectedId("")}>
            <ChevronLeft /> back
          </button>
          <button className="action__button" type="button">
            <ArrowsMaximize />
          </button>
          </div>
          <HeroDetail />
        </div>
      </section>
    </>
  );
};

export default HeroesPage;
