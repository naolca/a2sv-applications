"use client";


import { CssBaseline, Grid, PaletteMode, ThemeProvider, Typography, createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import { blue } from '@mui/material/colors';
import getTheme from '../../getTheme';
import * as React from 'react';
import ToggleColorMode from '../../components/ToggleColorMode';
import Iconify from "../../components/iconify";
import AppWidgetSummary from "@/app/components/app-widget-summary";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleIcon from "@mui/icons-material/People";
import AppCurrentVisits from "@/app/components/app-current-visits";

import { useGetApplicationStatsQuery } from "@/app/redux/slices/applications_slice";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function AdminDashboardHome() {
  const { data, error, isLoading } = useGetApplicationStatsQuery({});

  const [stats, setStats] = useState({} as any);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        console.log(data);
        setStats(data);
      }
    };
    fetchData();
  }, [data]);

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
  if (error) return <div>Error</div>;
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3} 
       
      >
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Applications"
            total={stats.total}
            color="success"
            icon={
              <FormatAlignJustifyIcon
                sx={{
                  fontSize: 40,
                }}
              />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Inperson Applicants"
            total={stats.IP}
            color="info"
            icon={
              <PersonPinIcon
                sx={{
                  fontSize: 40,
                }}
              />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Remote Applicants"
            total={stats.RE}
            color="warning"
            icon={
              <LanguageIcon
                sx={{
                  fontSize: 40,
                }}
              />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Community Applicants"
            total={10}
            color="error"
            icon={
              <PeopleIcon
                sx={{
                  fontSize: 40,
                }}
              />
            }
          />
        </Grid>
      </Grid>
      

      <Grid
        minWidth={"xl"}
        container
        display={"flex"}
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          mt: 5,
        }}
        position={'relative'}
        left={0}

      
      >
        <Grid
          flex={1}
          sx={{
            mr: 2,
          }}
        >
          <AppCurrentVisits
            title="Application stats"
            chart={{
              series: [
                { label: "Inperson", value: stats.IP },
                { label: "Remote", value: stats.RE },
                { label: "Community", value: 10 },
              ],
              colors: ["#00AB55", "#FFC107", "#FF5722"],
            }}
            subheader={""}
          />
        </Grid>

        <Grid
        >
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: "Inperson", value: stats.IP },
                { label: "Remote", value: stats.RE },
                { label: "Community", value: 10 },
              ],
              colors: ["#00AB55", "#FFC107", "#FF5722"],
            }}
            subheader={""}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
