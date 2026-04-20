"use client";
import { useEffect, useReducer, useState } from "react";
import { Board, Tickets_STATUSES, Tickets } from "../interface";
import { TicketsMockData } from "../utils/mockData";
import { ticketReducer } from "./ticketReducir";

const boardInit: Board[] = [
  { id: "TODO", title: "Pendientes", status: Tickets_STATUSES.TODO },
  { id: "PROGRESS", title: "En Proceso", status: Tickets_STATUSES.IN_PROGRESS },
  { id: "DONE", title: "Listo", status: Tickets_STATUSES.DONE },
];

export const useTickets = () => {
  //const [tickets, setTickets] = useState<Tickets[]>([]);
  const [tickets, dispatch] = useReducer(ticketReducer, []);
  const [board] = useState<Board[]>(boardInit);

  useEffect(() => {
    dispatch({
      type: "LOAD_TICKET",
      payload: TicketsMockData,
    });
  }, []);

  const handleAddTicket = (newTicket: Tickets) => {
    dispatch({ type: "ADD_TICKET", payload: newTicket });
  };

  const handleChangeStatus = (ticket: Tickets) => {
    dispatch({ type: "CHANGE_STATUS", payload: ticket });
  };

  return {
    listTickets: tickets,
    board,

    handleAddTicket,
    handleChangeStatus,
  };
};
