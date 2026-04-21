import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Modal from "@/shared/ui/molecules/Modal";

describe("Componente Modal", () => {
  it("no muestra el contenido cuando está cerrado", () => {
    render(
      <Modal>
        <Modal.Trigger>Abrir</Modal.Trigger>
        <Modal.Content>
          <div>Contenido del modal</div>
        </Modal.Content>
      </Modal>,
    );

    expect(screen.queryByText("Contenido del modal")).not.toBeInTheDocument();
  });

  it("abre el modal al hacer clic en el trigger", () => {
    render(
      <Modal>
        <Modal.Trigger>Abrir</Modal.Trigger>
        <Modal.Content>
          <div>Contenido del modal</div>
        </Modal.Content>
      </Modal>,
    );

    fireEvent.click(screen.getByText("Abrir"));

    expect(screen.getByText("Contenido del modal")).toBeInTheDocument();
  });
});
