// ✅ Server Component — solo renderiza HTML
import { ReactNode } from "react";
import { AuthProvider } from "../store/AuthContext";
import { ThemeProvider } from "../store/ThemeContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>{" "}
    </ThemeProvider>
  );
};
