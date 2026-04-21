// ✅ Client Component — usa usePathname
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
}

interface TabProps {
  children: ReactNode;
  href: string;
}

function Tabs({ children }: TabsProps) {
  return <div>{children}</div>;
}

function TabList({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "2px solid #e2e8f0",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
}

function Tab({ href, children }: TabProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      style={{
        padding: "12px 24px",
        border: "none",
        borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent",
        backgroundColor: "transparent",
        color: isActive ? "#3b82f6" : "#64748b",
        fontWeight: isActive ? "600" : "400",
        cursor: "pointer",
        fontSize: "14px",
        marginBottom: "-2px",
      }}
    >
      {children}
    </Link>
  );
}

function TabPanels({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function TabPanel({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
