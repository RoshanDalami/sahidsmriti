
import '../globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin",
  description: "",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      
      <CssBaseline />
      <body className={inter.className}>
        
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}