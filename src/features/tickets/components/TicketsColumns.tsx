// ✅ Server Component — solo renderiza HTML
import { Card } from "@/shared/ui/molecules/Card";
import type { Tickets } from "../interface";
import { getTicketsByStatus } from "../utils/getTicketsByStatus";
import { Title, Button, Badge, Text } from "@/shared/ui/atoms";

interface PropsTicketsColumns {
  ticketsList: Tickets[];
  title: string;
  status: string;
  handleChangeStatus: (ticket: Tickets) => void;
}

export const TicketsColumns = ({
  ticketsList,
  title,
  status,
  handleChangeStatus,
}: PropsTicketsColumns) => {
  const tickets = getTicketsByStatus({ ticketsList, status });

  return (
    <div className="Columns">
      <div className="columnTitle">
        <h3>{title}</h3>
      </div>
      <div>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className="projectCard"
            cardStyle={ticket.status}
          >
            <Title>{ticket.name}</Title>
            <Text>{ticket.responsible}</Text>

            <div className="Card-content_Justify">
              <Badge priority={ticket.priority}>{ticket.priority}</Badge>
              {ticket.status !== "DONE" && (
                <Button
                  className="button primary"
                  type="button"
                  onClick={() => {
                    handleChangeStatus(ticket);
                  }}
                >
                  Mover
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
