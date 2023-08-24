
import './globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahid Smriti Samudayiak Hospital",
  description: "The Sahid Smriti Samudayik Hospital was established in 2067 BS driven by the Vision to provide best medical healthcare to the people of Chitwan and its neighboring district so that the people be treated well as they were compelled to travel out of even for minor treatment. As the overwhelming response it received from the people of this region, the hospital became one of the best hospital to provide finest healthcare in a pleasant environment by professional medical team.",
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
