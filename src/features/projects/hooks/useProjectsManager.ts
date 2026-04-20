import { useProjectsStore } from "../store/ProjectsState"

export const useProjectsManager = () => {
    const projects = useProjectsStore((state) => state.projects);
    const setProjects = useProjectsStore((state) => state.setProjects);
    const addProject = useProjectsStore((state) => state.addProject);

    return {
        projects,
        setProjects,
        addProject,
    };
}
