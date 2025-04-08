import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falling Walls Lab Wrocław",
  description:
    "The website for Falling walls lab Wrocław 2025. The event will take place on 13th September 2025. The event is organized at University of Wrocław.",
  icons: {
    icon: "./favicon.ico",
  },
  keywords: [
    "Falling Walls Lab",
    "Falling Walls Lab Wrocław",
    "Falling Walls Lab 2024",
    "Falling Walls Lab 2025",
    "Falling Walls",
    "Event",
    "University of Wrocław",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
