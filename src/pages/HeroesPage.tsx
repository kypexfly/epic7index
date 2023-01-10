import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import HeroesList from "../components/HeroesList";
import FilterMenu from "../components/FilterMenu";
// import InfoPanel from "../components/InfoPanel";
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

  const setSelectedId = useAppStore(state => state.setSelectedId)

  useEffect(() => {
    return () => setSelectedId("")
  }, [])

  return (
    <>
      <div className="flex relative">
        <SearchBar setSearch={setSearch} />
        <FilterMenu
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      </div>
      {/* <div> */}
        <HeroesList search={search} filterOptions={filterOptions} />
        {/* <InfoPanel /> */}
      {/* </div> */}
    </>
  );
};

export default HeroesPage;
