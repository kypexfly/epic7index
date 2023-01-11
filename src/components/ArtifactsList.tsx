import useDebounce from "../hooks/useDebounce";
import { useFetchArtifacts } from "../hooks/useFetch";
import { FilterState } from "../pages/HeroesPage";
import ArtifactCard from "./CardViews/ArtifactCard";
import checkFilterValues from "../utils/checkFilterValues";
import { useAppStore } from "../store/useStore";

type ArtifactsListProps = {
  search: string;
  filterOptions: FilterState;
};

const ArtifactsList = ({ search, filterOptions }: ArtifactsListProps) => {
  const selectedId = useAppStore(state => state.selectedId)
  const { data: artifacts, isLoading } = useFetchArtifacts();
  const debouncedSearch = useDebounce(search, 300);

  if (isLoading) return null;

  const filteredArtifacts = artifacts?.filter(
    (artifact) =>
      artifact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
    //   checkFilterValues(artifact.role, [...filterOptions["roles"]])
    //   checkFilterValues(artifact.zodiac, [...filterOptions["zodiacs"]]) &&
      checkFilterValues(artifact.rarity.toString(), [...filterOptions["rarity"]])
  );

  if (filteredArtifacts?.length === 0)
    return <p>No results. Try again, please.</p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] auto-rows-[minmax(100px,_2fr)] gap-1 py-2 col-start-1 col-end-4">
      {filteredArtifacts?.map((artifact) => (
        // <span>{artifact.name}</span>
        <ArtifactCard
          key={artifact.id}
          artifact={artifact}
          isSelected={artifact.id === selectedId}
        />
      ))}
    </div>
  );
};

export default ArtifactsList;
