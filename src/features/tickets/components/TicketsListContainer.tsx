// ✅ Client Component — Se utilizan hook
"use client";
import { useMemo } from "react";
import { useTickets } from "../hooks/useTickets";
import { getTicketsByProjects } from "../utils/getTicketsByProjects";
import { TicketListPresentation } from "./TicketListPresentation";

interface PropsListresentation {
  projectId?: string | null;
}

export const TicketsListContainer = ({ projectId }: PropsListresentation) => {
  const { listTickets, board, handleAddTicket, handleChangeStatus } =
    useTickets();

  const ticketsFilters = useMemo(() => {
    return getTicketsByProjects({ listTickets, projectId });
  }, [listTickets, projectId]);

  return (
    <TicketListPresentation
      listTickets={ticketsFilters}
      board={board}
      handleAddTicket={handleAddTicket}
      handleChangeStatus={handleChangeStatus}
    />
  );
};
