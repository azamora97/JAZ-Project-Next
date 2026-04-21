// ✅ Server Component — solo renderiza HTML
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Jaz Project",
  description:
    "Bienvenido a Jaz Project, una plataforma para gestionar proyectos y tickets.",
  openGraph: {
    title: "Inicio - Jaz Project",
    description:
      "Bienvenido a Jaz Project, una plataforma para gestionar proyectos y tickets.",
    type: "website",
  },
};

export default function Home() {
  return <div>HomePage Proyecto Jose Andres Zamora Montoya</div>;
}
