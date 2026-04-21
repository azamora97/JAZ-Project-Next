import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Badge } from "@/shared/ui/atoms/Badge";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("renderiza el texto correctamente", () => {
    render(<Badge priority="active">Activo</Badge>);

    expect(screen.getByText("Activo")).toBeInTheDocument();
  });

  it("aplica estilos según priority", () => {
    render(<Badge priority="high">Crítico</Badge>);

    const badge = screen.getByText("Crítico");

    expect(badge).toHaveStyle({
      background: "#ef4444",
    });
  });
});
