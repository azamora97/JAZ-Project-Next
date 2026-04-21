import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { useProjectsStore } from "@/features/projects/store/ProjectsState";
import { Project } from "@/features/projects/interface";

describe("useProjectsStore", () => {
    beforeEach(() => {
        // reset del estado antes de cada test
        useProjectsStore.setState({ projects: [] });
    });

    it("tiene un estado inicial vacío", () => {
        const state = useProjectsStore.getState();

        expect(state.projects).toEqual([]);
    });

    it("setProjects actualiza la lista de proyectos", () => {
        const mockProjects: Project[] = [
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
        ];

        useProjectsStore.getState().setProjects(mockProjects);

        const state = useProjectsStore.getState();

        expect(state.projects).toEqual(mockProjects);
    });

    it("addProject agrega un nuevo proyecto", () => {
        const project: Project = {
            id: '1',
            name: "Sistema de Gestión",
            description: "Proyecto para gestionar tickets internos",
            totalTickets: 25,
            status: "active"
        };

        useProjectsStore.getState().addProject(project);

        const state = useProjectsStore.getState();

        expect(state.projects).toHaveLength(1);
        expect(state.projects[0]).toEqual(project);
    });

    it("agrega múltiples proyectos correctamente", () => {
        const project1: Project = {
            id: '1',
            name: "Proyecto 1",
            description: "test",
            totalTickets: 1,
            status: "active"
        };

        const project2: Project = {
            id: '2',
            name: "Proyecto 2",
            description: "test",
            totalTickets: 1,
            status: "active"
        };

        const store = useProjectsStore.getState();

        store.addProject(project1);
        store.addProject(project2);

        const state = useProjectsStore.getState();

        expect(state.projects).toHaveLength(2);
        expect(state.projects).toEqual([project1, project2]);
    });
});