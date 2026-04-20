import { create } from "zustand";
import { Project } from "../interface";

interface ProjectsState {
    projects: Project[];

    // actions
    setProjects: (projects: Project[]) => void;
    addProject: (project: Project) => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
    projects: [],

    setProjects: (projects) =>
        set(() => ({
            projects,
        })),

    addProject: (project) =>
        set(({ projects }) => ({
            projects: [...projects, project],
        }))
}));