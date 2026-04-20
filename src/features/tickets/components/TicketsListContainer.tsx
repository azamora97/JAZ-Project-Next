// ✅ Client Component — Se utilizan hook
"use client";
import { useTickets } from "../hooks/useTickets";
import { getTicketsByProjects } from "../utils/getTicketsByProjects";
import { TicketListPresentation } from "./TicketListPresentation";

interface PropsListresentation {
  projectId?: string | null;
}

export const TicketsListContainer = ({ projectId }: PropsListresentation) => {
  const { listTickets, board, handleAddTicket, handleChangeStatus } =
    useTickets();

  const ticketsFilters = getTicketsByProjects({ listTickets, projectId });

  return (
    <TicketListPresentation
      listTickets={ticketsFilters}
      board={board}
      handleAddTicket={handleAddTicket}
      handleChangeStatus={handleChangeStatus}
    />
  );
};
