import { Tickets_PRIORITIES, Tickets_STATUSES, Tickets } from '../interface';

export const TicketsMockData: Tickets[] = [
    {
        id: '1',
        projectId: '1',
        name: "Crear login",
        status: Tickets_STATUSES.IN_PROGRESS,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "Carlos"
    },
    {
        id: '2',
        projectId: '1',
        name: "Validación de formularios",
        status: Tickets_STATUSES.IN_PROGRESS,
        priority: Tickets_PRIORITIES.MEDIUM,
        responsible: "Ana"
    },
    {
        id: '3',
        projectId: '2',
        name: "Diseño de pantalla principal",
        status: Tickets_STATUSES.DONE,
        priority: Tickets_PRIORITIES.LOW,
        responsible: "Luis"
    },
    {
        id: '4',
        projectId: '2',
        name: "Integración con API",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "María"
    },
    {
        id: '5',
        projectId: '3',
        name: "Configurar base de datos",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "Pedro"
    },
    {
        id: '6',
        projectId: '3',
        name: "Optimizar consultas SQL",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.MEDIUM,
        responsible: "Lucía"
    },
    {
        id: '7',
        projectId: '4',
        name: "Implementar autenticación JWT",
        status: Tickets_STATUSES.IN_PROGRESS,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "Jorge"
    },
    {
        id: '8',
        projectId: '4',
        name: "Pruebas unitarias",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.MEDIUM,
        responsible: "Sofía"
    },
    {
        id: '9',
        projectId: '1',
        name: "Recuperación de contraseña",
        status: Tickets_STATUSES.DONE,
        priority: Tickets_PRIORITIES.LOW,
        responsible: "Diego"
    },
    {
        id: '10',
        projectId: '2',
        name: "Animaciones UI",
        status: Tickets_STATUSES.BACKLOG,
        priority: Tickets_PRIORITIES.LOW,
        responsible: "Valentina"
    },
    {
        id: '11',
        projectId: '3',
        name: "Backup automático",
        status: Tickets_STATUSES.TODO,
        priority: Tickets_PRIORITIES.HIGH,
        responsible: "Andrés"
    },
    {
        id: '12',
        projectId: '4',
        name: "Documentación API",
        status: Tickets_STATUSES.DONE,
        priority: Tickets_PRIORITIES.MEDIUM,
        responsible: "Gabriela"
    }
]