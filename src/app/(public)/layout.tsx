

import "../globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Components/Navbar";
import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

import FooterPage from "./Components/Footer";
import { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
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

      <CssBaseline />
      <body className={inter.className}>
        <Toaster position="top-center" />

       <NavBar/>

        {children}
       <FooterPage/>
      </body>
    </html>
  );
}
