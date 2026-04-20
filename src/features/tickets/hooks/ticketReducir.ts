import { Tickets, Action } from "../interface";
import { getNextStatus } from "../utils/getNextStatus";


export const ticketReducer = (state: Tickets[], action: Action): Tickets[] => {
    switch (action.type) {
        case "LOAD_TICKET":
            return action.payload;

        case "ADD_TICKET":
            return [...state, action.payload];

        case "DELETE_TICKET":
            return state.filter(ticket => ticket.id !== action.payload);

        case "CHANGE_STATUS":
            return state.map(ticket =>
                ticket.id === action.payload.id
                    ? { ...ticket, status: getNextStatus(action.payload.status) }
                    : ticket
            );

        default:
            return state;
    }
}