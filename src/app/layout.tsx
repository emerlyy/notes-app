import FontProvider from "@/components/FontProvider/FontProvider";
import Header from "@/components/ui/Header/Header";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import ConfirmationModalProvider from "@/context/ConfirmationModalContext";
import SettingsProvider from "@/context/SettingsContext";
import { ColorTheme, FontTheme } from "@/types";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";

import "./globals.css";
import "./MainLayout.css";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path") || "Notes App";
  const pathSegments = pathname.split("/").filter((segment) => segment !== ""); // Split pathname into segments and remove empty segments
  const titleSegments = pathSegments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1) // Capitalize the first letter of each segment
  );
  const title = titleSegments.join(" › "); // Join segments with a separator

  return { title };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieFont = cookieStore.get("font-theme")?.value as
    | FontTheme
    | undefined;
  const cookieColor = cookieStore.get("color-theme")?.value as
    | ColorTheme
    | undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <SettingsProvider color={cookieColor} font={cookieFont}>
        <ConfirmationModalProvider>
          <FontProvider>
            <body data-fondt-theme={cookieFont} data-color-theme={cookieColor}>
              <div className="layout">
                <Header className="layout__header" />
                <Sidebar className="layout__sidebar" />
                <main className="layout__outlet">{children}</main>
              </div>
            </body>
          </FontProvider>
        </ConfirmationModalProvider>
      </SettingsProvider>
    </html>
  );
}
