import { describe, it, expect } from "vitest";
import { getTicketsByProjects } from "@/features/tickets/utils/getTicketsByProjects";
import { Tickets, Tickets_PRIORITIES, Tickets_STATUSES } from "@/features/tickets/interface";

const mockTickets: Tickets[] = [
    {
        id: "1",
        projectId: "1",
        name: "Crear login",
        status: Tickets_STATUSES.IN_PROGRESS,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "Carlos",
    },
    {
        id: "2",
        projectId: "1",
        name: "Validación de formularios",
        status: Tickets_STATUSES.IN_PROGRESS,
        priority: Tickets_PRIORITIES.MEDIUM,
        responsible: "Ana",
    },
    {
        id: "3",
        projectId: "2",
        name: "Diseño de pantalla principal",
        status: Tickets_STATUSES.DONE,
        priority: Tickets_PRIORITIES.LOW,
        responsible: "Luis",
    },
    {
        id: "4",
        projectId: "2",
        name: "Integración con API",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "María",
    },
];

describe("getTicketsByProjects", () => {
    it("retorna todos los tickets si projectId es null", () => {
        const result = getTicketsByProjects({
            listTickets: mockTickets as Tickets[],
            projectId: null,
        });

        expect(result).toHaveLength(4);
        expect(result).toEqual(mockTickets);
    });

    it("filtra tickets por projectId", () => {
        const result = getTicketsByProjects({
            listTickets: mockTickets as Tickets[],
            projectId: "1",
        });

        expect(result).toHaveLength(2);
        expect(result).toEqual([
            {
                id: "1",
                projectId: "1",
                name: "Crear login",
                status: Tickets_STATUSES.IN_PROGRESS,
                priority: Tickets_PRIORITIES.HIGH,
                responsible: "Carlos",
            },
            {
                id: "2",
                projectId: "1",
                name: "Validación de formularios",
                status: Tickets_STATUSES.IN_PROGRESS,
                priority: Tickets_PRIORITIES.MEDIUM,
                responsible: "Ana",
            }
        ]);
    });
});