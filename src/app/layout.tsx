// ✅ Client Component — se usa el useRouter
"use client";
import { AppProvider, Layout } from "@/shared";
import "./globals.css";
import Tabs from "@/shared/components/Tabs";

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
                <Tabs.Tab href="/tickets">Tiquetes</Tabs.Tab>
                <Tabs.Tab href="/about">Acerca de</Tabs.Tab>
              </Tabs.List>
            </Tabs>

            {children}
          </Layout>
        </AppProvider>
      </body>
    </html>
  );
}
