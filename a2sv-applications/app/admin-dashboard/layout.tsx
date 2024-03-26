// components/DashboardLayout.tsx
"use client";
import {
  CssBaseline,
  Grid,
  PaletteMode,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";
import getTheme from "../getTheme";
import * as React from "react";
import ToggleColorMode from "../components/ToggleColorMode";
import { useState, ReactNode } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Main from "../components/main";
import Header from "../components/Header";
import { Box } from "@mui/material";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [openNav, setOpenNav] = useState(true);
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <Head children={undefined}></Head>
        <Header onOpenNav={() => setOpenNav(true)} />
        <Box
          sx={{
            color: "text.primary",
            bgcolor: 'background.default',
            minHeight: 1,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            height: "100vh",
          }}
        >
          <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
          <Main sx={{}}>{children}</Main>
        </Box>
      </ThemeProvider>
    </>
  );
}
