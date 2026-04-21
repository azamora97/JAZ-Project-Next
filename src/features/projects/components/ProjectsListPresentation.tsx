// ✅ Client Component — utiliza el useForm
"use client";
import React from "react";
import { Badge, Button, Text, Title } from "@/shared/ui/atoms";
import { Card } from "@/shared/ui/molecules/Card";
import type { Project } from "../interface";
import { CARD_STYLE } from "@/features/tickets/interface";
import Modal from "@/shared/ui/molecules/Modal";
import { useAddProjetForm } from "../hooks/useFormProject";

interface PropsListPresentation {
  listProjects: Project[];
  handleAddProject: (project: Project) => void;
  handleSelectProject: (id: string) => void;
}

export const ProjectsListPresentation = React.memo(
  ({
    listProjects,
    handleAddProject,
    handleSelectProject,
  }: PropsListPresentation) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useAddProjetForm();

    return (
      <div>
        <div className="ProjectsTitle">
          <h2>Projectos</h2>
        </div>
        <div className="CardContainer">
          {listProjects.map((project) => (
            <Card
              key={project.id}
              className="projectCard"
              cardStyle={CARD_STYLE.PRIMARY}
            >
              <Title>{project.name}</Title>
              <Text>{project.description}</Text>
              <div className="Card-content_Justify ">
                <Text>Total de tickets: {project.totalTickets || 0}</Text>
                <Badge priority={project.status}>{project.status}</Badge>
              </div>

              <Button
                className="button primary"
                type="button"
                onClick={() => {
                  handleSelectProject(project.id);
                }}
              >
                Ver Tickets
              </Button>
            </Card>
          ))}
        </div>

        <Button className="floatingButton" type="button">
          +
        </Button>

        <Modal>
          <Modal.Trigger>
            <Button className="floatingButton" type="button">
              +
            </Button>
          </Modal.Trigger>

          <Modal.Content>
            <Modal.Header>Crear Proyecto</Modal.Header>

            <Modal.Body>
              <input
                className="border p-2 w-full mb-2"
                placeholder="Proyecto"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <span className="error-text">{errors.name}</span>
              )}
            </Modal.Body>

            <Modal.Body>
              <input
                className="border p-2 w-full mb-2"
                placeholder="Descripcion"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.description && errors.description && (
                <span className="error-text">{errors.description}</span>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Modal.Close>
                <Button className="button" type="button">
                  Cancelar
                </Button>
              </Modal.Close>

              <Button
                className="button primary"
                type="button"
                onClick={() => {
                  handleSubmit(async () => {
                    await handleAddProject({
                      id: crypto.randomUUID(),
                      name: values.name,
                      description: values.description,
                      status: "active",
                    });
                  });
                }}
              >
                Guardar
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </div>
    );
  },
);
