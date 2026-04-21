// ✅ Client Component — se usa el useRouter
"use client";
import { TicketsListContainer } from "@/features/tickets/components/TicketsListContainer";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  return <TicketsListContainer projectId={projectId} />;
}
