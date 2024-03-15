'use client';

import { Box, Button, PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import TextInputCard from "../components/TextInputCard";
import getTheme from "../getTheme";
import SendIcon from '@mui/icons-material/Send';

import { useGetInpersonApplicationsQuery } from "../redux/slices/applications_slice";
const textInputs = [
  { label: "First Name", example: "John" },
  { label: "Last Name", example: "Doe" },
  { label: "Email", example: "firaolibrahim@gmail.com"  },
]


interface Data {
  texts: any[]; 
  numbers: any[];
  dropdowns: any[]; 
  checkboxes: any[]; 
  radios: any[]; 
}

// ...

export default function inperson() {

  const [idx, setIndex] = React.useState(0);
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const {
    data, isLoading, isError
  } = useGetInpersonApplicationsQuery({});


  const next = () => {
    console.log("increase index");
    setIndex((prevIndex) => (prevIndex + 1));
  }
  const back = () => {

    setIndex((prevIndex) => (prevIndex - 1));
  }

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>
    if (data) {
      // unpack the data to different variables
      console.log(data)
      const {texts, numbers, dropdowns, checkboxes, radios} = data as Data;
    

  

  
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
    <Box sx={{ bgcolor: 'background.default', justifyContent:"center", alignItems:"center", rowGap:10, minHeight:'100vh', columnGap:10 }}>

      {
        texts.map((input, index) => (
          idx == index && <TextInputCard
            
           key={index} label={input.label} example={input.example}  backClick={back} nextClick={next}  />
        ))
      }



      {/* {
        idx === 2 && (
          <Button
            sx={{position:'relative', bottom:2 , right:2,  backgroundColor: 'primary.main', color: 'white', '&:hover': {backgroundColor: 'primary.dark' }}}
           variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        )
      } */}
    </Box>
    </ThemeProvider>
   
  );
    }
    
}