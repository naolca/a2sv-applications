import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { motion } from "framer-motion"
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
} from "@mui/material";

interface RadioInputCardProps {
  label: string;
  choices: string[];
  value?: string;
}

export default function RadioInputCard({
  label,
  choices,
  value,
}: RadioInputCardProps) {
  return (
    <Box
      height={400}
      width={700}
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={"auto"}
      gap={4}
      component="section"
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
            </Box>
          </FormGroup>
        </Card>
      </Container>
    </Box>
  );
}
