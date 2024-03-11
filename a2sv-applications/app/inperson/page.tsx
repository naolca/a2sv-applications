'use client';

import { Box, PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import TextInputCard from "../components/TextInputCard";
import getTheme from "../getTheme";


const textInputs = [
  { label: "First Name", example: "John" },
  { label: "Last Name", example: "Doe" },
  { label: "Email", example: "firaolibrahim@gmail.com"  },
]

export default function inperson() {

  const [idx, setIndex] = React.useState(0);
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });


  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1));
  }

  
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
    <Box sx={{ bgcolor: 'background.default', justifyContent:"center", alignItems:"center", rowGap:3, minHeight:'100vh' }}>
      {
        textInputs.map((input, index) => (
          idx == index && <TextInputCard key={index} label={input.label} example={input.example} onClick={next} />
        ))
      }
    </Box>
    </ThemeProvider>
   
  );
}