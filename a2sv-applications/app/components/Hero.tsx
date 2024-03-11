import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EducationCard from './EducationCard';


const Educations = [
    {
        title: 'In-person Education',
        description: 'In-person program for talented students from Addis Ababa University, AASTU, and University of Ghana, offering hands-on training on campus.',
        image: '/education.jpg',
        link:'/inperson'
    },
    {
        title: 'Community Education',
        description: ' The Community Education Program is the entry to A2SV, allowing students to start their learning journey until the next intake season.',
        image: '/education.jpg',
        link:'/community'
    },
    {
        title: 'Remote Education',
        description: 'Remote education allows students from all over the world access to its high-quality education through a virtual setting. This program is designed to reach all Africans.',
        image: '/education.jpg',
        link:'/remote'
    }
    ];



export default function Hero() {
  return (
    <Box
        
      id="hero"
      sx={(theme) => ({
        width: '100%',
        minHeight: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' , lg:'100%'} }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'roboto',
            }}
          >
            Welcome to &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                 
              }}
            >
               A2SV &nbsp;  
            </Typography>
             Applications

          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary">
            What We Provide
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            
        A2SV Education’s model is a dynamic ecosystem that cultivates tech
        talent across Africa through a triad of educational pathways: engaging
        community education, direct in-person learning at partner
        institutions, and extensive remote education for broader reach. This
        approach ensures practical tech and soft skills development, opening
        doors to career opportunities with leading global tech companies,
        thereby bridging the gap between African students and the
        international tech industry.
      
            </Typography>

            <Container
                 sx={{

                    display: 'flex',
                    width: { xs: '100%', sm: '70%'},
                    
                    gap: { xs: 2, sm: 4},
                    flexDirection:{ xs: 'column', md: 'row', lg: 'row'},
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                  

                  }}
            >
                {Educations.map((education, index) => (
                    <EducationCard key={index} {...education} />
                ))}
            </Container>
         </Stack>
       
      </Container>
    </Box>
  );
}
