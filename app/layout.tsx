import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mono = Fira_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Manager App",
  description: "Personal portfolio and login page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased bg-zinc-50 dark:bg-black`}>
        {/* Fullscreen wrapper */}
        <div className="flex justify-center items-center min-h-screen px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
