import { AttributeTypes, RoleTypes, ZodiacTypes } from "../hooks/types";
import { FilterState } from "../pages/HeroesPage";

interface FilterColumnState {
  filterOptions: FilterState;
  handleSetFilter: (category: string, filter: string) => void;
  filter: string;
  category: AttributeTypes | RoleTypes | ZodiacTypes | Number[];
}

export default function FilterColumn({
  filterOptions,
  handleSetFilter,
  filter,
  category,
}: FilterColumnState) {
  return (
    <section>
      <h3 className="font-bold text-sm text-center">{filter.toUpperCase()}</h3>
      <ul>
        <li>
          <label htmlFor={`all-${filter}`} className="flex gap-2">
            <input
              type="checkbox"
              checked={filterOptions[filter as keyof FilterState].has("All")}
              onChange={() => handleSetFilter(filter, "All")}
              id={`all-${filter}`}
            />
            All
          </label>
        </li>
        {Object.values(category).map((filterOption) => (
          <li key={filterOption}>
            <label htmlFor={filterOption} className="flex gap-2">
              <input
                type="checkbox"
                checked={filterOptions[filter as keyof FilterState].has(
                  filterOption
                )}
                onChange={() => handleSetFilter(filter, filterOption)}
                id={filterOption}
              />
              <img
                className="max-h-6"
                src={`/assets/${filter}/${filterOption}.png`}
                alt=""
              />
            </label>
          </li>
        ))}
      </ul>
      </section>
  );
}
