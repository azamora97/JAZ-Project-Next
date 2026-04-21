"use client";
import { useEffect, useReducer, useState, useRef, useCallback } from "react";
import { Board, Tickets_STATUSES, Tickets } from "../interface";
import { TicketsMockData } from "../utils/mockData";
import { ticketReducer } from "./ticketReducir";

const boardInit: Board[] = [
  { id: "TODO", title: "Pendientes", status: Tickets_STATUSES.TODO },
  { id: "PROGRESS", title: "En Proceso", status: Tickets_STATUSES.IN_PROGRESS },
  { id: "DONE", title: "Listo", status: Tickets_STATUSES.DONE },
];

export const useTickets = () => {
  const [tickets, dispatch] = useReducer(ticketReducer, []);
  const [board] = useState<Board[]>(boardInit);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    dispatch({
      type: "LOAD_TICKET",
      payload: TicketsMockData,
    });
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleAddTicket = useCallback((newTicket: Tickets) => {
    dispatch({ type: "ADD_TICKET", payload: newTicket });
  }, []);

  const handleChangeStatus = useCallback((ticket: Tickets) => {
    dispatch({ type: "CHANGE_STATUS", payload: ticket });
  }, []);

  return {
    listTickets: tickets,
    board,

    handleAddTicket,
    handleChangeStatus,
  };
};
