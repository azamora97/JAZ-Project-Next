import { describe, it, expect } from "vitest";
import { getTicketsByStatus } from "@/features/tickets/utils/getTicketsByStatus";

const mockTickets = [
  {
    id: "1",
    name: "Login",
    status: "TODO",
  },
  {
    id: "2",
    name: "Dashboard",
    status: "IN-PROGRESS",
  },
  {
    id: "3",
    name: "API",
    status: "DONE",
  },
  {
    id: "4",
    name: "Fix bug",
    status: "TODO",
  },
];

describe("getTicketsByStatus", () => {
  it("retorna tickets con status TODO", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as any,
      status: "TODO",
    });

    expect(result).toHaveLength(2);
    expect(result.every((t) => t.status === "TODO")).toBe(true);
  });

  it("retorna tickets con status IN-PROGRESS", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as any,
      status: "IN-PROGRESS",
    });

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("IN-PROGRESS");
  });
  it("retorna tickets con status DONE", () => {
    const result = getTicketsByStatus({
      ticketsList: mockTickets as any,
      status: "DONE",
    });

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("DONE");
  });
});
