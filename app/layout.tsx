import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/nav-bar";

export const metadata: Metadata = {
  title: "Omdena Hawk-A-Thon",
  description: "A funky neo-brutalist website for the Omdena Hawk-A-Thon event",
  keywords: ["Omdena", "Hackathon", "AI", "Machine Learning", "Neo Brutalism"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background Patterns */}
        <div className="fixed inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="fixed inset-0 diagonal-bg opacity-10 pointer-events-none" />
        <NavBar />
        {/* Main Content */}
        <div className="relative min-h-screen">
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
