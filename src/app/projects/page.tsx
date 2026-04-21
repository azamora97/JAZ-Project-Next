// ✅ Client Component — se usa el useRouter
"use client";
import { ProjectsListContainer } from "@/features/projects";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function page() {
  const router = useRouter();

  const handleSelectProject = useCallback(
    (id: string) => {
      router.push(`/tickets?projectId=${id}`);
    },
    [router],
  );

  return <ProjectsListContainer handleSelectProject={handleSelectProject} />;
}
