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
} from "@mui/material";

interface DropDownInputCardProps {
  label: string;
  choices: string[];
  value?: string;
}

export default function DropDownInputCard({
  label,
  choices,
  value,
}: DropDownInputCardProps) {
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

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={label}
                  label={label}
                >
                  {choices.map((choice) => (
                    <MenuItem value={choice}>{choice}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              
            </Box>
          </FormGroup>
        </Card>
      </Container>
    </Box>
  );
}
