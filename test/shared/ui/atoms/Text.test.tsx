import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Text } from "@/shared/ui/atoms/Text";
import { render, screen } from "@testing-library/react";

describe("Text", () => {
  it("renderiza el texto correctamente", () => {
    render(<Text>Soy un texto</Text>);

    expect(screen.getByText("Soy un texto")).toBeInTheDocument();
  });
});
