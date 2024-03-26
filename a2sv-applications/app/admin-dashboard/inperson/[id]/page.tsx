"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetApplicationByIdQuery } from "@/app/redux/slices/applications_slice";
import { useEffect, useState } from "react";
import { set } from "lodash";
import { Box, Stack, Container, Typography, CircularProgress } from "@mui/material";

export default function InpersonApplicant({
  params,
}: {
  params: { id: string };
}) {
  const { data, error, isLoading } = useGetApplicationByIdQuery(
    params.id
  ) as any;
  const [applicant, setApplicant] = useState([] as any);

  useEffect(() => {
    if (data) {

      setApplicant(data.fields);
    
    }
  }, [data, applicant]);

  if (isLoading) return (
    <Box  margin={'auto'} sx={{ display: 'flex'  }}>
    <CircularProgress
      size={40}
      sx={{
        color: 'primary.main',
      }}
     />
  </Box>
  );

  
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (data) {
    console.log(data);
  }

  /* extract the id from the params*/

  return (
    <Container
      maxWidth="xl"
    
    
      sx={{
        height: "100vh",
        overflow: "auto",
        padding: "sm",
      }}
    >
      <Stack
        spacing={2}
        overflow={"auto"}
        sx={{
          overflow: "auto",
        }}
      >
        {applicant.map((field: any, index: number) => {
          console.log(index, field.lable, field.value);
          return (
            <Box
              sx={{
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
              key={index}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }} 
              >{field.label}</Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontSize: "1rem",
                  fontWeight: "semibold",
                  marginBottom: "10px",
                }}
              >
                <Typography
                component={"span"}
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  fontWeight: "semibold",
                  marginBottom: "10px",
                }}
                >Response: </Typography>
                {field.value}</Typography>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
