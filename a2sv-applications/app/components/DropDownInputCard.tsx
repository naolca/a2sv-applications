import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";

interface DropDownInputCardProps {
  label: string;
  choices: string[];
  value?: string;
  nextClick?: () => void;
  backClick?: () => void;
  onChange?: (e: any, i:any) => void;
  idx: any;
}

export default function DropDownInputCard({
  label,
  choices,
  value,
  nextClick,
  backClick,
  onChange,
  idx
}: DropDownInputCardProps) {
  const [currentChoice, setCurrentChoice] = React.useState("");

  const handleChange = (e: any) => {
  
    // e.preventDefault();
    if (onChange) onChange(e, idx);
    setCurrentChoice(e.target.value);
  };

  return (
    <Box
     
      maxHeight={700}
      maxWidth={700}
      display="flex"
      alignItems="center"
      justifyContent="center"
     
      gap={4}
      component={motion.section}
      initial={{ opacity: 0, y: '100vh'  }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{
        opacity: 0,
        y: "-100vh",
        transition: { duration: 1 },
      }}
      transition={{ type: "tween", duration: 1 }}
    
    >
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          
            gap: 2,
            boxShadow: 3,
            rounded: 2,
          }}
        >
          <FormGroup
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              p: 2,
              gap: 2,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="start"
              p={2}
              gap={2}
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h5"
                component="h2"
                align="left"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "black" : "white",
                  fontFamily: "roboto",
                  textAlign: "left",
                  alignSelf: "start",
                }}
              >
                {label}
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentChoice}
                  onChange={handleChange}
                  label={label}
                >
                  {choices.map((choice, index) => (
                    <MenuItem key={index} value={choice}>
                      {choice}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="flex self-end">
                <SvgIcon
                  component={ArrowUpwardIcon}
                  onClick={backClick}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                    alignSelf: "start",
                    position: "relative",
                    left: 0,
                    bottom: 0,
                    cursor: "pointer",
                    ":hover": {
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? "primary.main"
                          : "primary.light",
                    },
                    transition: "color 0.5s",
                  }}
                />

                <SvgIcon
                  onClick={nextClick}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                    alignSelf: "end",
                    position: "relative",
                    right: 0,
                    bottom: 0,
                    cursor: "pointer",
                    ":hover": {
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? "primary.main"
                          : "primary.light",
                    },
                    transition: "color 0.5s",
                  }}
                  component={ArrowDownwardIcon}
                />
              </div>
            </Box>
          </FormGroup>
        </Card>
      </Container>
    </Box>
  );
}
