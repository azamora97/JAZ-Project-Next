// ✅ Server Component — solo renderiza HTML
import { Board, TaskFilter, Tickets } from "../interface";
import { TicketsColumns } from "./TicketsColumns";
import { TicketsFilters } from "./TicketsFilters";

interface PropsTicketsPresentatio {
  listTickets: Tickets[];
  board: Board[];
  filter: TaskFilter;
  search: string;
  setFilter: (filter: TaskFilter) => void;
  handleAddTicket: (newTicket: Tickets) => void;
  handleChangeStatus: (ticket: Tickets) => void;
  setSearch: (search: string) => void;
}

export const TicketListPresentation = ({
  listTickets,
  board,
  filter,
  search,
  setFilter,
  handleChangeStatus,
  setSearch,
}: PropsTicketsPresentatio) => {
  console.log("Renderizando TicketListPresentation valor del filter: ", filter);
  return (
    <div className="ticketListPresentation">
      <TicketsFilters
        filter={filter}
        search={search}
        onSetFilter={setFilter}
        setSearch={setSearch}
      />
      <div className="board">
        {board.map((itemBoard) => (
          <TicketsColumns
            key={itemBoard.id}
            ticketsList={listTickets}
            title={itemBoard.title}
            status={itemBoard.status}
            handleChangeStatus={handleChangeStatus}
          />
        ))}
      </div>
    </div>
  );
};
