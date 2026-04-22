// ✅ Client Component — Se utilizan hook
"use client";
import { useEffect, useState } from "react";
import { useProjectsManager } from "../hooks/useProjectsManager";
import { ProjectsListPresentation } from "./ProjectsListPresentation";
import Loading from "./loading";

interface Props {
  handleSelectProject: (id: string) => void;
}

export const ProjectsListContainer = ({ handleSelectProject }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { projects, setProjects, addProject } = useProjectsManager();

  useEffect(() => {
    setProjects();
  }, [setProjects]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) return <Loading />;

  return (
    <ProjectsListPresentation
      listProjects={projects}
      handleAddProject={addProject}
      handleSelectProject={handleSelectProject}
    />
  );
};
