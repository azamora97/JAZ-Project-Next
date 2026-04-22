// ✅ Client Component — usa hooks
'use client';

import {
  useEffect,
  useReducer,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Board, Tickets_STATUSES, Tickets, TaskFilter } from "../interface";
import { TicketsMockData } from "../utils/mockData";
import { ticketReducer } from "./ticketReducir";
import { useDebounce } from "./useDebounce";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

const boardInit: Board[] = [
  { id: "BACKLOG", title: "Backlog", status: Tickets_STATUSES.BACKLOG },
  { id: "TODO", title: "Pendientes", status: Tickets_STATUSES.TODO },
  { id: "PROGRESS", title: "En Proceso", status: Tickets_STATUSES.IN_PROGRESS },
  { id: "DONE", title: "Listo", status: Tickets_STATUSES.DONE },
];

export const useTickets = () => {

  const [storedTickets, setStoredTickets] = useLocalStorage<Tickets[]>("tickets-storage", []);

  const [board] = useState<Board[]>(boardInit);
  const [tickets, dispatch] = useReducer(ticketReducer, [], () => (storedTickets.length ? storedTickets : TicketsMockData));
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const debouncedSetSearch = useDebounce(setSearch2);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    setStoredTickets(tickets);

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [tickets, setStoredTickets]);

  const handleAddTicket = useCallback((newTicket: Tickets) => {
    dispatch({ type: "ADD_TICKET", payload: newTicket });
  }, []);

  const handleChangeStatus = useCallback((ticket: Tickets) => {
    dispatch({ type: "CHANGE_STATUS", payload: ticket });
  }, []);

  const setFilterListTickets = useMemo(() => {
    let result = tickets.filter((ticket) => {
      if (filter === "all") return true;
      if (filter === "TODO") return ticket.status === "TODO";
      if (filter === "BACKLOG") return ticket.status === "BACKLOG";
      if (filter === "IN-PROGRESS") return ticket.status === "IN-PROGRESS";
      if (filter === "DONE") return ticket.status === "DONE";
    });

    result = result.filter((ticket) => {
      if (
        search2.trim() !== "" &&
        !ticket.name.toLowerCase().includes(search2.toLowerCase())
      ) {
        return false;
      }
      return true;
    });

    return result;
  }, [filter, tickets, search2]);

  const handleChange = useCallback(
    (s: string) => {
      setSearch(() => {
        debouncedSetSearch(s);

        return s;
      });
    },
    [debouncedSetSearch],
  );

  return {
    listTickets: setFilterListTickets,
    board,
    filter,
    search,

    setFilter,
    handleAddTicket,
    handleChangeStatus,
    setSearch: handleChange,
  };
};
