import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/shared/ui/atoms/SearchBar";

describe("SearchBar component", () => {
  it("renderiza el label por defecto", () => {
    render(<SearchBar search="" setSearch={vi.fn()} />);

    expect(screen.getByText("Buscar:")).toBeInTheDocument();
  });

  it("renderiza un label personalizado", () => {
    render(
      <SearchBar label="Buscar proyectos" search="" setSearch={vi.fn()} />,
    );

    expect(screen.getByText("Buscar proyectos")).toBeInTheDocument();
  });

  it("muestra el valor inicial del input", () => {
    render(<SearchBar search="test" setSearch={vi.fn()} />);

    const input = screen.getByPlaceholderText("Escriba el título...");
    expect(input).toHaveValue("test");
  });

  it("llama a setSearch cuando el usuario escribe", () => {
    const mockSetSearch = vi.fn();

    render(<SearchBar search="" setSearch={mockSetSearch} />);

    const input = screen.getByPlaceholderText("Escriba el título...");

    fireEvent.change(input, { target: { value: "nuevo valor" } });

    expect(mockSetSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSearch).toHaveBeenCalledWith("nuevo valor");
  });

  it("asocia correctamente el label con el input", () => {
    render(<SearchBar search="" setSearch={vi.fn()} />);

    const label = screen.getByText("Buscar:");
    const input = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "search-input");
    expect(input).toHaveAttribute("id", "search-input");
  });
});
