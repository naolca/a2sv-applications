import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SvgIcon,
} from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface RadioInputCardProps {
  label: string;
  choices: string[];
  value?: string;
  nextClick?: () => void;
  backClick?: () => void;
  onChange?: (e: any,i:any) => void;
  idx:any;
}

export default function RadioInputCard({
  label,
  choices,
  value,
  nextClick,
  backClick,
  onChange,
  idx
}: RadioInputCardProps) {


  const change = (e: any) => {
    if (onChange) onChange(e, idx);
  }

  return (
    <Box
      maxHeight={1000}
      maxWidth={700}
      
     
      display="flex"
      alignItems="center"
      justifyContent="center"
      
      gap={4}
      component="section"
      
    >
      <Container
        sx={{
          width: "100%",
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
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

              <FormControl
                component="fieldset"
                sx={{ width: "100%", textAlign: "left" }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={value}
                  onChange={change}
                >
                  {choices.map((choice, index) => (
                    <FormControlLabel
                      key={index}
                      value={choice}
                      control={<Radio />}
                      label={choice}
                    />
                  ))}
                </RadioGroup>
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
