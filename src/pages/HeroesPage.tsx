import { useEffect, useState } from "react";
import { ArrowsMaximize, ChevronLeft } from "tabler-icons-react";
import FilterMenu from "../components/FilterMenu";
import HeroDetail from "../components/HeroDetail";
import HeroesList from "../components/HeroesList";
import SearchBar from "../components/SearchBar";
import { useAppStore } from "../store/useStore";
import { Link } from 'react-router-dom'

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
    ? "hero__section visible mr-[0vw]"
    : "hero__section invisible mr-[-100vw]";

  useEffect(() => {
    return () => setSelectedId("");
  }, []);

  return (
    <>
      <section className={selectedId ? "overflow-none sp:overflow-y-auto flex-1 p-2 ml-[-100vw] sp:ml-0" : "overflow-y-auto flex-1 p-2"}>
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
          <Link to={`/heroes/${selectedId}`} className="action__button">
            <ArrowsMaximize />
          </Link>
          </div>
          <HeroDetail />
        </div>
      </section>
    </>
  );
};

export default HeroesPage;
