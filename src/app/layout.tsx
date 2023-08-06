"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Components/Navbar";
import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import FooterPage from "./Components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: any = {
//   title: "Sahid Smriti Samudayiak Hospital",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const {id} = useParams();
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>
        <Toaster position="top-center" />

        {(pathname === "/appointment" || pathname === `/appointment/${id}`) ? null : (
          <NavBar />
        )}

        {children}
        {(pathname === "/login"||pathname === "/appointment" || pathname === `/appointment/${id}`) ? null : (
          <FooterPage />
        )}
      </body>
    </html>
  );
}
