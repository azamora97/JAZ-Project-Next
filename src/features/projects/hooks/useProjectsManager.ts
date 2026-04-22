import { useProjectsStore } from "../store/ProjectsState"

export const useProjectsManager = () => {
    const {
        projects,
        setProjects,
        addProject,
    } = useProjectsStore();

    return {
        projects,
        setProjects,
        addProject,
    };
}
