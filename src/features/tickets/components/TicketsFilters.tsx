import { SearchBar } from "@/shared";
import { TaskFilter } from "../interface";

interface FilterOption {
  value: TaskFilter;
  label: string;
}

const filters: FilterOption[] = [
  { value: "all", label: "Todas" },
  { value: "TODO", label: "Pendientes" },
  { value: "DONE", label: "Completadas" },
  { value: "BACKLOG", label: "Por hacer" },
  { value: "IN-PROGRESS", label: "En progreso" },
];

interface PropsTicketsFilters {
  filter: TaskFilter;
  search: string;
  onSetFilter: (value: TaskFilter) => void;
  setSearch: (search: string) => void;
}

export const TicketsFilters = ({
  filter,
  search,
  onSetFilter,
  setSearch,
}: PropsTicketsFilters) => {
  console.log(`valor del filtro en TicketsFilters: ${filter}`);
  return (
    <div className="filters flex flex-wrap gap-2">
      <SearchBar search={search} setSearch={setSearch} />
      {filters.map((filterOption) => {
        const isActive = filter === filterOption.value;
        return (
          <button
            key={filterOption.value}
            type="button"
            onClick={() => onSetFilter(filterOption.value)}
            className={`btn-filter rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? "bg-blue-600 text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {filterOption.label}
          </button>
        );
      })}
    </div>
  );
};
