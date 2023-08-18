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
    <Link href={''} className='m-6'>
    <Card sx={{ maxWidth: 345 }} className=' group h-auto w-auto hover:bg-indigo-600 hover:text-white md:w-auto shadow-2xl '>
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
    </Link>
  );
}