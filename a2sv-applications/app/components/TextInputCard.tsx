import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, FormControl, FormGroup } from "@mui/material";
import { motion } from "framer-motion";

interface TextInputCardProps {
  label: string;
  example?: string;
  onClick?: () => void;
  value?: string;
}

export default function TextInputCard({
  label,
  example,
  value,
  onClick,
}: TextInputCardProps) {
  return (
    <Box
      onClick={onClick}
      maxHeight={400}
      maxWidth={700}
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={"auto"}
      gap={4}
      component={motion.section}
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw", transition: { duration: 2 } }} 
      transition={{ type: "tween", duration: 2 }}
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
              <Button
                variant="contained"
                type="submit"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "black" : "white",
                  alignSelf: "start",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
                size="large"
              >
                Submit
              </Button>
            </Box>
          </FormGroup>
        </Card>
      </Container>
    </Box>
  );
}
