import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Input } from "@/shared/ui/atoms/input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
  it("renderiza el texto correctamente", () => {
    render(<Input placeholder="Ingrese su nombre" />);

    expect(
      screen.getByPlaceholderText("Ingrese su nombre"),
    ).toBeInTheDocument();
  });

  it("aplica estilos según priority", () => {
    render(<Input variant="success" />);

    expect(screen.getByRole("textbox")).toHaveStyle({
      border: "1px solid #16a34a",
    });
  });
});
