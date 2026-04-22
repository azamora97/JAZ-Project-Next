// ✅ Client Component — usa hooks
'use client';

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Project } from "../interface";
import { ProjectDataMock } from "../utils/mockData";

interface ProjectsState {
    projects: Project[];

    // actions
    setProjects: () => void;
    addProject: (project: Project) => void;
}

export const useProjectsStore = create<ProjectsState>()(
    persist(
        (set, get) => ({
            projects: [],

            setProjects: () => {
                if (get().projects.length === 0) {
                    set(() => ({
                        projects: ProjectDataMock,
                    }))
                }
            },

            addProject: (project) =>
                set((state) => ({
                    projects: [...state.projects, project],
                })),
        }),
        {
            name: "projects-storage",
        }
    )
);