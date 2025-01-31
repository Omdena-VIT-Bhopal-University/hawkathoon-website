import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/nav-bar";

export const metadata: Metadata = {
  title: "Omdena Hawk-a-Thoon'25",
  description: "Omdena Local Chapter event website",
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Comic Book Background Texture */}
        <div className="fixed inset-0 comic-dots opacity-30 pointer-events-none" />
        <div className="fixed inset-0 comic-lines opacity-20 pointer-events-none" />
        <div className="fixed inset-0 comic-crosshatch opacity-10 pointer-events-none" />
        <NavBar />
        {/* Main Content */}
        <div className="relative min-h-screen">
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
