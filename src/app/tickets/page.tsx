// ✅ Client Component — se usa el useRouter
"use client";
import { TicketsListContainer } from "@/features/tickets/components/TicketsListContainer";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  return <TicketsListContainer projectId={projectId} />;
}
