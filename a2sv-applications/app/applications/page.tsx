'use client';
import { Box, CssBaseline, PaletteMode, ThemeProvider, Typography, createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import { blue } from '@mui/material/colors';
import getTheme from '../getTheme';
import * as React from 'react';
import ToggleColorMode from '../components/ToggleColorMode';
import Hero from '../components/Hero';
import TextInputCard from '../components/TextInputCard';
import DropDownInputCard from '../components/DropDownInputCard';
import RadioInputCard from '../components/RadioInputCard';
import FileInputCard from '../components/FileInputCard';

const textInputs = [
    { label: "First Name", example: "John" },
    { label: "Last Name", example: "Doe" },
    { label: "Email", example: "firaolibrahim@gmail.com"  },
]


export default function Applications() {

    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });
    const [idx, setIndex] = React.useState(0);
  
    const toggleColorMode = () => {
      setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
  
    const toggleCustomTheme = () => {
      setShowCustomTheme((prev) => !prev);
    };

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1));
      }
      const back = () => {
    
        setIndex((prevIndex) => (prevIndex - 1));
      }


  

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <Box sx={{ bgcolor: 'background.default', justifyContent:"center", alignItems:"center", rowGap:3 }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Hero />
           <FileInputCard label="Upload Resume" />
            </Box>
         </ThemeProvider>
    )
}

/*<DropDownInputCard label="Country" choices={["USA", "Canada", "Mexico"]} />
            <RadioInputCard label={'Gender'} choices={["Male", "Female"]} />
            <FileInputCard label="Upload Resume" /> */