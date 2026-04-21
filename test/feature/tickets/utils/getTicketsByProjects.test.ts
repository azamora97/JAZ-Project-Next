import { describe, it, expect } from "vitest";
import { getTicketsByProjects } from "@/features/tickets/utils/getTicketsByProjects";

const mockTickets = [
    {
        id: "1",
        name: "Ticket 1",
        projectId: "A",
    },
    {
        id: "2",
        name: "Ticket 2",
        projectId: "B",
    },
    {
        id: "3",
        name: "Ticket 3",
        projectId: "A",
    },
];

describe("getTicketsByProjects", () => {
    it("retorna todos los tickets si projectId es null", () => {
        const result = getTicketsByProjects({
            listTickets: mockTickets as any,
            projectId: null,
        });

        expect(result).toHaveLength(3);
        expect(result).toEqual(mockTickets);
    });

    it("filtra tickets por projectId", () => {
        const result = getTicketsByProjects({
            listTickets: mockTickets as any,
            projectId: "A",
        });

        expect(result).toHaveLength(2);
        expect(result).toEqual([
            {
                id: "1",
                name: "Ticket 1",
                projectId: "A",
            },
            {
                id: "3",
                name: "Ticket 3",
                projectId: "A",
            },
        ]);
    });
});