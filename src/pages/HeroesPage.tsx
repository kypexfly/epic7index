import { useState } from "react";
import SearchBar from "../components/SearchBar";
import HeroesList from "../components/HeroesList";
import FilterMenu from "../components/FilterMenu";

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
  
  return (
    <>
      <div className="flex relative">
        <SearchBar setSearch={setSearch} />
        <FilterMenu
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      </div>
      <HeroesList search={search} filterOptions={filterOptions} />
    </>
  );
};

export default HeroesPage;
