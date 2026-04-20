// ✅ Server Component — solo renderiza HTML
import { Board, Tickets } from "../interface";
import { TicketsColumns } from "./TicketsColumns";

interface PropsTicketsPresentatio {
  listTickets: Tickets[];
  board: Board[];
  handleAddTicket: (newTicket: Tickets) => void;
  handleChangeStatus: (ticket: Tickets) => void;
}

export const TicketListPresentation = ({
  listTickets,
  board,
  handleChangeStatus,
}: PropsTicketsPresentatio) => {
  return (
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
  );
};
