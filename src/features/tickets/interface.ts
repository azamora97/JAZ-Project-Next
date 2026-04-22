export const Tickets_STATUSES = {
    BACKLOG: "BACKLOG",
    TODO: "TODO",
    IN_PROGRESS: "IN-PROGRESS",
    DONE: "DONE",
} as const;

export const Tickets_PRIORITIES = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
} as const;

export const CARD_STYLE = {
    TODO: Tickets_STATUSES.TODO,
    PROGRESS: Tickets_STATUSES.IN_PROGRESS,
    DEFAULT: "default",
    PRIMARY: "primary",
    DONE: Tickets_STATUSES.DONE,
    BACKLOG: Tickets_STATUSES.BACKLOG
} as const;

export type Ticketstatus = (typeof Tickets_STATUSES)[keyof typeof Tickets_STATUSES];
export type TicketsPriority =
    (typeof Tickets_PRIORITIES)[keyof typeof Tickets_PRIORITIES];
export type TaskFilter = "all" | Ticketstatus;

export type CardStyle =
    (typeof CARD_STYLE)[keyof typeof CARD_STYLE];

export interface Tickets {
    id: string;
    projectId: string;
    name: string;
    status: Ticketstatus;
    priority: TicketsPriority
    responsible: string
}

export type Action =
    | { type: 'LOAD_TICKET'; payload: Tickets[] }
    | { type: 'ADD_TICKET'; payload: Tickets }
    | { type: 'DELETE_TICKET'; payload: string }
    | { type: "CHANGE_STATUS"; payload: { id: string; status: Tickets["status"] } };

export interface Board {
    id: string;
    title: string,
    status: Ticketstatus
}