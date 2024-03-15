import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { File } from "buffer";



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

interface FileInputCardProps {
  label: string;
  value?: File;
}

async function uploadFile(file:any) {
  const reader = new FileReader();
  reader.onload = function(e) {
    console.log(e.target?.result);
  }
  reader.readAsBinaryString(file);
  

}



export default function FileInputCard({
  label,
}: FileInputCardProps) {
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

          

            <Button
                sx={{  alignSelf: "start"}}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={(e) => {
                  if (e.target.files?.length) {
                    console.log(e.target.files[0])
                    uploadFile(e.target.files[0]);
                  }
                }} />
            </Button>
              
            </Box>
          </FormGroup>
        </Card>
      </Container>
    </Box>
  );
}
