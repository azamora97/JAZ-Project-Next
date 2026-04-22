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
  const {
    listTickets,
    board,
    filter,
    search,
    setFilter,
    handleAddTicket,
    handleChangeStatus,
    setSearch,
  } = useTickets();

  const ticketsFilters = useMemo(() => {
    return getTicketsByProjects({ listTickets, projectId });
  }, [listTickets, projectId]);
  console.log("Renderizando TicketsListContainer valor del filter: ", filter);
  return (
    <TicketListPresentation
      listTickets={ticketsFilters}
      board={board}
      filter={filter}
      search={search}
      setFilter={setFilter}
      handleAddTicket={handleAddTicket}
      handleChangeStatus={handleChangeStatus}
      setSearch={setSearch}
    />
  );
};
