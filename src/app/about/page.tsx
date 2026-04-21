// ✅ Server Component — solo renderiza HTML
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de - Jaz Project",
  description:
    "Información sobre Jaz Project, una plataforma para gestionar proyectos y tickets.",
  openGraph: {
    title: "Acerca de - Jaz Project",
    description:
      "Información sobre Jaz Project, una plataforma para gestionar proyectos y tickets.",
    type: "website",
  },
};

export default async function page() {
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">Información del Proyecto</h1>
          <p className="about-subtitle">
            Conoce más sobre Jaz Project, una plataforma para gestionar
            proyectos y tickets.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <h2 className="about-card-title">Detalles del Proyecto</h2>
          </div>
          <div className="about-table-container">
            <table className="about-table">
              <thead>
                <tr>
                  <th>Nombre del Proyecto</th>
                  <th>Descripción</th>
                  <th>Creado por</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dev Board</td>
                  <td>Proyecto con Next.js</td>
                  <td>José Andrés Zamora</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="about-footer">
          <p>
            Jaz Project es una aplicación moderna construida con Next.js,
            TypeScript y CSS puro para una gestión eficiente de proyectos y
            tickets.
          </p>
        </div>
      </div>
    </div>
  );
}
