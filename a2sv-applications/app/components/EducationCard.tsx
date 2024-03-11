'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { useRouter } from 'next/navigation';

interface EducationCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}


export default function EducationCard(education: EducationCardProps) {
    const { title, description, image, link } = education;
    const router = useRouter();

    const handleClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      router.push(link)
    }

    return (
                        
                <Card
                  onClick={handleClick}
                        
                sx={{
                    
                    transition: 'all 3000ms ease-in-out',
                    height:'auto',
                     }}>
                <CardMedia
                    component="img"
                    alt="education"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Apply</Button>
                </CardActions>
                </Card>
    )
    
}



/*
return (

        <CardContainer className="inter-var">
          <CardBody className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:${mode === 'light' ? 'primary.main' : 'white'} dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border` }>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/education.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ); */




/*

 <Card
        
     sx={{
        
        transition: 'all 3000ms ease-in-out',
 
        ":hover": {
            translateY: -10,
            translateX: 10,
            height: 420,
            transition: 'all 3s'
        },
       
        maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="education"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Apply</Button>
      </CardActions>
    </Card>
*/ 