import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { Button } from "@/shared/ui/atoms/Button";

describe("Button", () => {
  it("renderiza el texto correctamente", () => {
    render(
      <Button className="btn-primary" type="button">
        Click aquí
      </Button>,
    );

    expect(screen.getByText("Click aquí")).toBeInTheDocument();
  });

  it("tiene el type correcto", () => {
    render(
      <Button className="btn" type="submit">
        Guardar
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Guardar" });

    expect(button).toHaveAttribute("type", "submit");
  });

  it("ejecuta onClick cuando se hace click", () => {
    const handleClick = vi.fn();

    render(
      <Button className="btn" type="button" onClick={handleClick}>
        Click
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Click" });

    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
