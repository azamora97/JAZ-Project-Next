// ✅ Client Component — se usa el useRouter
"use client";
import { AppProvider, Layout } from "@/shared";
import Tabs from "@/shared/components/Tabs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppProvider>
          <Layout>
            <Tabs>
              <Tabs.List>
                <Tabs.Tab href="/projects">Proyectos</Tabs.Tab>
                <Tabs.Tab href="/tickets">Todos los Tiquetes</Tabs.Tab>
              </Tabs.List>
            </Tabs>

            {children}
          </Layout>
        </AppProvider>
      </body>
    </html>
  );
}
