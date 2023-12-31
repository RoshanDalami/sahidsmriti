'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props:any) {
  return (
   
    <Card sx={{ maxWidth: 345 }} className=' group h-auto w-auto hover:bg-indigo-600 hover:text-white md:w-auto shadow-2xl m-6'>
      <CardActionArea className=' overflow-hidden  '>
        <Image src={props.image} alt='' className='group-hover:scale-110 transition-all ease-in-out  h-[350px]'/>
      </CardActionArea>
      <CardActionArea>

        <div className='text-center' >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  >
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary ">
           {props.description}
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
    </Card>
    
  );
}