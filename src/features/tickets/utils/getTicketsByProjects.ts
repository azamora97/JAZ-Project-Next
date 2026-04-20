import type { Tickets } from "../interface";

interface PropsGetTickets {
    listTickets: Tickets[];
    projectId?: string | null;
}

export const getTicketsByProjects = ({
    listTickets,
    projectId,
}: PropsGetTickets): Tickets[] => {

    if (projectId === null) return listTickets;

    return listTickets.filter((tickets) => tickets.projectId === projectId);
};