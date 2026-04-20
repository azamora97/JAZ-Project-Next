import { Project } from "../interface";

export const ProjectDataMock: Project[] = [
    {
        id: '1',
        name: "Sistema de Gestión",
        description: "Proyecto para gestionar tickets internos",
        totalTickets: 25,
        status: "active"
    },
    {
        id: '2',
        name: "App Mobile",
        description: "Aplicación móvil para clientes",
        totalTickets: 40,
        status: "active"
    },
    {
        id: '3',
        name: "Página Web Corporativa",
        description: "Rediseño del sitio web oficial",
        status: "inactive"
    },
    {
        id: '4',
        name: "API de Pagos",
        description: "Integración con pasarela de pagos",
        totalTickets: 15,
        status: "active"
    }
]