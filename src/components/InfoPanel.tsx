import { useAppStore } from "../store/useStore";
import { useFetchHeroes } from "../hooks/useFetch";
import { X } from "tabler-icons-react";
const InfoPanel = () => {
  const [selectedId, setSelectedId] = useAppStore((state) => [state.selectedId, state.setSelectedId]);
  const { data } = useFetchHeroes();
  const hero = data?.filter((hero) => hero.id === selectedId)[0];

  return (
    <div className="bg-gray-200/75 dark:bg-gray-700/75 right-5 fixed bottom-16 w-40 p-2 z-10 rounded">
      {!hero ? (
        <p>Select a hero</p>
      ) : (
        <>
            <button onClick={() => setSelectedId("")}><X/> Remove</button>
          <h3>Selected hero</h3>
          <ul className="list-none">
          <li><strong>Name:</strong> {hero?.name}</li>
          <li><strong>Rarity:</strong> {hero?.rarity} <img src="/assets/rarity/1.png" alt="" /></li>
          <li><strong>Role:</strong> {hero?.role}</li>
          <li><strong>Sex:</strong> {hero?.sex === 0 ? "Undefined" : (hero?.sex === 1 ? "Male" : "Female")}</li>
          <li><strong>Zodiac:</strong> {hero?.zodiac}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default InfoPanel;
