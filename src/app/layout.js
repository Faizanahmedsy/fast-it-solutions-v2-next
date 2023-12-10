import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast It Solutions",
  description: "Fast It Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar  />
        {children}</body>
    </html>
  );
}
