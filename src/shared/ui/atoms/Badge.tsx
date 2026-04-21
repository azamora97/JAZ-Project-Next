// ✅ Client Component — se agerega el memo
"use client";
import React from "react";

type BadgeVariant =
  | "default"
  | "low"
  | "medium"
  | "high"
  | "active"
  | "inactive";

interface PropsBadge {
  children: React.ReactNode;
  className?: string;
  priority: BadgeVariant;
}

const priorityStyle: Record<BadgeVariant, React.CSSProperties> = {
  default: { background: "#1f2937" },
  medium: { background: "#f59e0b" },
  high: { background: "#ef4444" },
  low: { background: "#3b82f6" },
  active: { background: "#3fdf6f" },
  inactive: { background: "#afaeae" },
};

// ✅ Server Component — solo renderiza HTML
export const Badge = React.memo(
  ({ children, className = "", priority }: PropsBadge) => {
    return (
      <span
        className={className}
        style={{
          display: "inline-block",
          padding: "4px 8px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: 500,
          ...priorityStyle[priority],
          color: "white",
        }}
      >
        {children}
      </span>
    );
  },
);
