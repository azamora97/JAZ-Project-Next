import { Project } from "../interface";

export const ProjectDataMock: Project[] = [
    {
        id: '1',
        name: "Sistema de Gestión",
        description: "Proyecto para gestionar tickets internos",
        totalTickets: 3,
        status: "active"
    },
    {
        id: '2',
        name: "App Mobile",
        description: "Aplicación móvil para clientes",
        totalTickets: 3,
        status: "active"
    },
    {
        id: '3',
        name: "Página Web Corporativa",
        description: "Rediseño del sitio web oficial",
        totalTickets: 3,
        status: "inactive"
    },
    {
        id: '4',
        name: "API de Pagos",
        description: "Integración con pasarela de pagos",
        totalTickets: 3,
        status: "active"
    }
]