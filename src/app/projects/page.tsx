// ✅ Client Component — se usa el useRouter
"use client";
import { ProjectsListContainer } from "@/features/projects";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const handleSelectProject = (id: string) => {
    router.push(`/tickets?projectId=${id}`);
  };

  return <ProjectsListContainer handleSelectProject={handleSelectProject} />;
}
