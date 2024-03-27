'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Store } from "@mui/icons-material";
import StoreProviderComponent from "./components/StoreProviderComponent";
import { BrowserRouter as Router } from 'react-router-dom';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Router>
    <html lang="en">
      <body className={inter.className}>
        <StoreProviderComponent>{children}</StoreProviderComponent>
      </body>
    </html>
    </Router>
  );
}
