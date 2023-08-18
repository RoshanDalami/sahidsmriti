'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { CardActionArea } from '@mui/material';


import Link from 'next/link';

export default function ActionAreaCardStaff(props:any) {
  return (
    
    <Card  className=' group h-auto w-[200px] hover:bg-indigo-600 hover:text-white md:w-auto shadow-2xl m-6 '>
      <CardActionArea>

        <div >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
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