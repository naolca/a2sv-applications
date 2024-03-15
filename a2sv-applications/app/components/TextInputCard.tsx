import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, FormControl, FormGroup, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from "react";
interface TextInputCardProps {
  label: string;
  example?: string;
  backClick?: () => void;
  nextClick?: () => void;
  value?: string;
}

export default function TextInputCard({
  label,
  example,
  value,
  backClick,
  nextClick,
}: TextInputCardProps) {
  const [fromRight, setFromRight] = React.useState(true);

  const handleNextClick = () => {
    console.log("next clicked");
    setFromRight(true);
    if (nextClick) nextClick();
  };
  const handleBackClick = () => {
    console.log("back clicked");
    setFromRight(false);
    if (backClick) backClick();
  };

  return (
    <Box
      key={fromRight ? "right" : "left"}
      maxHeight={400}
      maxWidth={700}
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={"auto"}
      gap={4}
      component={motion.section}
      initial={{opacity:0, y: fromRight ? "700" : "-100vh" }}
      animate={{ opacity: 1, x: 0, y: 0}}
      exit={{
        opacity: 0,
        y: fromRight ? "-100vh" : "100vh",
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
            p: 2,
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
              sx={{ width: "100%", height: "100%" }}
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
              {example && (
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                    fontFamily: "roboto",
                    textAlign: "left",
                    alignSelf: "start",
                  }}
                >
                  For example: {example}
                </Typography>
              )}
              <TextField
                required={true}
                sx={{ width: "100%" }}
                id="standard-multiline-flexible"
                label="Your Answer"
                multiline
                maxRows={4}
                variant="standard"
                value={value}
              />
              <div className="flex self-end">
                <SvgIcon
                  
                  component={ArrowUpwardIcon}
                  onClick={handleBackClick}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                    alignSelf: "start",
                    position: "relative",
                    left: 0,
                    bottom: 0,
                    cursor: "pointer",
                    ":hover":{
                      color: (theme) =>
                      theme.palette.mode === "light" ? "primary.main" : "primary.light",
                    },
                    transition: "color 0.5s",
                  }}
                />

                <SvgIcon
                  onClick={handleNextClick}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                    alignSelf: "end",
                    position: "relative",
                    right: 0,
                    bottom: 0,
                    cursor: "pointer",
                    ":hover":{
                      color: (theme) =>
                      theme.palette.mode === "light" ? "primary.main" : "primary.light",
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
