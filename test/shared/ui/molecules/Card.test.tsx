import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "@/shared/ui/molecules/Card";

describe("Card", () => {
  it("renderiza los children correctamente", () => {
    render(
      <Card className="card" cardStyle="default">
        Hola Card
      </Card>,
    );

    expect(screen.getByText("Hola Card")).toBeInTheDocument();
  });

  it("aplica la clase base correctamente", () => {
    render(
      <Card className="mi-card" cardStyle="primary">
        Test
      </Card>,
    );

    const card = screen.getByText("Test");

    expect(card).toHaveClass(
      "mi-card",
      "transition-transform",
      "duration-300",
      "hover:-translate-y-2",
      "cursor-pointer",
    );
  });
});
