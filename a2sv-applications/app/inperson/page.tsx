'use client';

import { Box, Button, PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import TextInputCard from "../components/TextInputCard";
import getTheme from "../getTheme";
import SendIcon from '@mui/icons-material/Send';

import { useGetInpersonApplicationsQuery } from "../redux/slices/applications_slice";
import DropDownInputCard from "../components/DropDownInputCard";
import RadioInputCard from "../components/RadioInputCard";


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
      const textsArray = [];
      for (let i = 0; i < texts.length; i++) {
        textsArray.push(<TextInputCard key={i} label={texts[i].label} example={texts[i].example}  backClick={back} nextClick={next}  />);
      }

      const dropdownsArray = [];
      for (let i = 0; i < dropdowns.length; i++) {
        dropdownsArray.push(<DropDownInputCard  label={dropdowns[i].label} choices = {dropdowns[i].choices} nextClick = {next} backClick = {back}   />);
      }

      const radiosArray = [];
      for (let i = 0; i < checkboxes.length; i++) {
        radiosArray.push(<RadioInputCard key={i} label={radios[i].label} choices = {radios[i].choices} backClick={back} nextClick={next}   />);
      }
      const inputs =[...radiosArray, ...textsArray, ...radiosArray];
      

    

  

  
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
    <Box sx={{ bgcolor: 'background.default', justifyContent:"center", alignItems:"center", rowGap:10, minHeight:'100vh', columnGap:10 }}>

      {
       inputs[idx]
      }
    </Box>
    </ThemeProvider>
   
  );
    }
    
}