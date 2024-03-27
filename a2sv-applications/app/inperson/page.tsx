"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  PaletteMode,
  Snackbar,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import TextInputCard from "../components/TextInputCard";
import getTheme from "../getTheme";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import CustomSnackbar from "../components/Snackbar";

import {
  useGetInpersonApplicationsQuery,
  useAddApplicationMutation,
} from "../redux/slices/applications_slice";
import DropDownInputCard from "../components/DropDownInputCard";
import RadioInputCard from "../components/RadioInputCard";
import { set } from "mongoose";
import CustomSnackBar from "../components/Snackbar";
import { forms } from "googleapis/build/src/apis/forms";

export default function inperson() {
  const [idx, setIndex] = React.useState(0);
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const [form, setForm] = React.useState<any>([]);
  const { data, isLoading, isError } = useGetInpersonApplicationsQuery({});
  const [addApplication, { isSuccess }] = useAddApplicationMutation();
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState<boolean>(false);




  React.useEffect(() => {
    if (isSuccess) {
      console.log("is success", isSuccess);
      setSuccess(true);
    }
  }, [isSuccess]);

  const handleSumbmit = async () => {
    // for (let i = 0; i < form.length; i++) {
    //   if (form[i].value === "") {
    //     setOpen(true);
    //     return;
    //   }
    // }
    await addApplication({
      for: "IP",
      fields: form,
    });

   
    // setSuccess(true);
  };

  const next = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const back = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const formDataChange = (e: any, i: any) => {
    e.preventDefault();

    setForm((prev: any) => {
      const newform = [...prev];
      newform[i] = { ...newform[i], value: e.target.value };
      return newform;
    });
  };

  // React.useEffect(() => {
  //   console.log("formData", formData[idx]);
  // }, [formData, idx]);

  if (isSuccess) {
   "here mane"

    
  }
  React.useEffect(() => {
    const fetchData = async () => {
      if (data) {
        setForm(data);
      }
      
      
    };
    fetchData();
  }, [data]);


  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Please Fill all the fields"
      />

     { success && <CustomSnackBar isOpen={success} />}

      <Box
        sx={{
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 10,
          minHeight: "100vh",
          columnGap: 2,
          flexDirection: "column",
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        {isLoading && (
          <Box margin={"auto"} sx={{ display: "flex" }}>
            <CircularProgress
              size={40}
              sx={{
                color: "primary.main",
              }}
            />
          </Box>
        )}
        <Grid container direction={"column"} spacing={2} alignContent={'center'}>
          {form.map((item: any, index: number) => {
            switch (item.type) {
              case "text":
                return (
                  <Grid
                    item
                    lg
                    key={index}
                    sx={{ display: "flex", }}
                  >
                    <TextInputCard
                      key={index}
                      label={item.label}
                      example={item.example}
                      idx={index}
                      onChange={formDataChange}
                    />
                  </Grid>
                );
              case "dropdown":
                return (
                  <Grid item xs={12}  key={index}>
                    <DropDownInputCard
                      key={index}
                      label={item.label}
                      choices={item.choices}
                      nextClick={next}
                      backClick={back}
                      idx={index}
                      onChange={formDataChange}
                    />
                  </Grid>
                );
              case "radio":
                return (
                  <Grid item xs key={index}>
                    <RadioInputCard
                      key={index}
                      label={item.label}
                      choices={item.choices}
                      onChange={formDataChange}
                      idx={index}
                    />
                  </Grid>
                );

              default:
                return null;
            }
          })}
        </Grid>

        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            alignSelf: "center",
          }}
          onClick={handleSumbmit}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
}
