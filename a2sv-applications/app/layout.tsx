import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Store } from "@mui/icons-material";
import StoreProviderComponent from "./components/StoreProviderComponent";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProviderComponent>{children}</StoreProviderComponent>
      </body>
    </html>
  );
}
