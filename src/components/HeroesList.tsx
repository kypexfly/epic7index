import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useFetchHeroes } from "../hooks/useFetchHeroes";
import { FilterState } from "../pages/HeroesPage";
import HeroCard from "./CardViews/HeroCard";
import checkFilterValues from "../utils/checkFilterValues";

type HeroesListProps = {
  search: string;
  filterOptions: FilterState;
};

const HeroesList = ({ search, filterOptions }: HeroesListProps) => {
  const [selectedId, setSelectedId] = useState("");
  const { data: heroes, isLoading } = useFetchHeroes();
  const debouncedSearch = useDebounce(search, 300);

  if (isLoading) return null;

  const filteredHeroes = heroes?.filter(
    (hero) =>
      hero.name.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      checkFilterValues(hero.attribute, [...filterOptions["attributes"]]) &&
      checkFilterValues(hero.role, [...filterOptions["roles"]]) &&
      checkFilterValues(hero.zodiac, [...filterOptions["zodiacs"]]) &&
      checkFilterValues(hero.rarity.toString(), [...filterOptions["rarity"]])
  );

  if (filteredHeroes?.length === 0)
    return <p>No results. Try again, please.</p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] auto-rows-[minmax(100px,_2fr)] gap-1 py-2">
      {filteredHeroes?.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isSelected={hero.id === selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default HeroesList;
