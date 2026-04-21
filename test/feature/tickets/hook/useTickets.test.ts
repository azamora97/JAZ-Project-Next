import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useTickets } from "@/features/tickets/hooks/useTickets";
import { Tickets_STATUSES } from "@/features/tickets/interface";
import { TicketsMockData } from "@/features/tickets/utils/mockData";

describe("useTickets hook", () => {
    // -------------------------
    // 1. ESTADO INICIAL
    // -------------------------
    it("inicia con board correcto y lista vacía", () => {
        const { result } = renderHook(() => useTickets());

        expect(result.current.board).toHaveLength(3);
        expect(result.current.listTickets).toEqual(TicketsMockData);
    });

    // -------------------------
    // 2. CARGA DE TICKETS (useEffect)
    // -------------------------
    it("carga tickets desde mock data", async () => {
        const { result } = renderHook(() => useTickets());

        // espera el useEffect
        await new Promise((r) => setTimeout(r, 0));

        expect(result.current.listTickets.length).toBeGreaterThan(0);
    });

    // -------------------------
    // 3. AGREGAR TICKET
    // -------------------------
    it("agrega un nuevo ticket correctamente", () => {
        const { result } = renderHook(() => useTickets());

        const newTicket = {
            id: "100",
            title: "Nuevo ticket",
            status: Tickets_STATUSES.TODO,
        };

        act(() => {
            result.current.handleAddTicket(newTicket as any);
        });

        expect(result.current.listTickets).toContainEqual(newTicket);
    });

    // -------------------------
    // 4. CAMBIAR ESTADO
    // -------------------------
    it("cambia el estado del ticket", () => {
        const { result } = renderHook(() => useTickets());

        const ticket = {
            id: "200",
            title: "Ticket prueba",
            status: Tickets_STATUSES.TODO,
        };

        act(() => {
            result.current.handleAddTicket(ticket as any);
            result.current.handleChangeStatus(ticket as any);
        });

        const updated = result.current.listTickets.find(
            (t) => t.id === "200"
        );

        expect(updated?.status).not.toBe(Tickets_STATUSES.TODO);
    });
});