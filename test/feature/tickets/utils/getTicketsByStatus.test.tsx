import { describe, it, expect } from "vitest";
import { getTicketsByStatus } from "@/features/tickets/utils/getTicketsByStatus";
import {
  Tickets,
  Tickets_PRIORITIES,
  Tickets_STATUSES,
} from "@/features/tickets/interface";

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

describe("getTicketsByStatus", () => {
  it("retorna tickets con status TODO", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as Tickets[],
      status: "TODO",
    });

    expect(result).toHaveLength(1);
    expect(result.every((t) => t.status === "TODO")).toBe(true);
  });

  it("retorna tickets con status IN-PROGRESS", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as Tickets[],
      status: "IN-PROGRESS",
    });

    expect(result).toHaveLength(2);
    expect(result[0].status).toBe("IN-PROGRESS");
  });
  it("retorna tickets con status DONE", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as Tickets[],
      status: "DONE",
    });

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("DONE");
  });
});
