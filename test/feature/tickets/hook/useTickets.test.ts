import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useTickets } from "@/features/tickets/hooks/useTickets";
import { Tickets, Tickets_STATUSES } from "@/features/tickets/interface";
import { TicketsMockData } from "@/features/tickets/utils/mockData";

describe("useTickets hook", () => {
    it("inicia con board correcto y lista vacía", () => {
        const { result } = renderHook(() => useTickets());

        expect(result.current.board).toHaveLength(4);
        expect(result.current.listTickets).toEqual(TicketsMockData);
    });

    it("carga tickets desde mock data", async () => {
        const { result } = renderHook(() => useTickets());

        await new Promise((r) => setTimeout(r, 0));

        expect(result.current.listTickets.length).toBeGreaterThan(0);
    });

    it("agrega un nuevo ticket correctamente", () => {
        const { result } = renderHook(() => useTickets());

        const newTicket = {
            id: "100",
            name: "Nuevo ticket",
            status: Tickets_STATUSES.TODO,
            projectId: "1",
        };

        act(() => {
            result.current.handleAddTicket(newTicket as Tickets);
        });

        expect(result.current.listTickets).toContainEqual(newTicket);
    });

    it("cambia el estado del ticket", () => {
        const { result } = renderHook(() => useTickets());

        const ticket = {
            id: "200",
            name: "Ticket prueba",
            status: Tickets_STATUSES.TODO,
            projectId: "1",
        };

        act(() => {
            result.current.handleAddTicket(ticket as Tickets);
            result.current.handleChangeStatus(ticket as Tickets);
        });

        const updated = result.current.listTickets.find(
            (t) => t.id === "200"
        );

        expect(updated?.status).not.toBe(Tickets_STATUSES.TODO);
    });
});