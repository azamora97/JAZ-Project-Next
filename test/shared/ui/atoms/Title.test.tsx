import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Title } from "@/shared/ui/atoms/Title";
import { render, screen } from "@testing-library/react";

describe("Title", () => {
  it("renderiza el texto correctamente", () => {
    render(<Title>Soy un titulo</Title>);

    expect(screen.getByText("Soy un titulo")).toBeInTheDocument();
  });
});
