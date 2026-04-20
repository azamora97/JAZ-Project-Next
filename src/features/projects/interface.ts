export type ProjectStatus = "active" | "inactive";

export interface Project {
    id: string;
    name: string;
    description: string;
    totalTickets?: number
    status: ProjectStatus
}