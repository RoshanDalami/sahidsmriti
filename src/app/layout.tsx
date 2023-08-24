
import './globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahid Smriti Samudayiak Hospital",
  description: "",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <title> Sahid Smriti Samudayiak Hospital </title>
      <CssBaseline />
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  );
}
