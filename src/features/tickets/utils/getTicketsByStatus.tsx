import type { Tickets } from "../interface";

interface PropsGetTickets {
  ticketsList: Tickets[];
  status: string;
}

export const getTicketsByStatus = ({
  ticketsList,
  status,
}: PropsGetTickets): Tickets[] => {
  return ticketsList.filter((tickets) => tickets.status === status);
};
