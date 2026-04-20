// ✅ Server Component — solo renderiza HTML
import { ReactNode } from "react";
import { CustomHeader } from "@/shared";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content">
      <CustomHeader
        title="JAZ-DevBoard"
        description="Proyectos Curso React Avanzado"
      />

      <main className="main">{children}</main>
    </div>
  );
};
