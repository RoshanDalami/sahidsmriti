import { nanoid } from "nanoid";
import doctor01 from '../assets/Doctor/doctor01.jpeg';
import doctor02 from '../assets/Doctor/doctor02.jpeg';
import doctor03 from '../assets/Doctor/doctor03.jpeg';

export const Doctor = [
    {
     id:nanoid(),
     title : 'Dr.Sudarshan Pandey',
     image : doctor01,
     description : 'Orthopedic surgeon'
        
    },
    {
     id:nanoid(),
     title : 'Dr. Deepak Pandey',
     image : doctor02,
     description : 'Medical Office'
        
    },
    {
     id:nanoid(),
     title : 'Dr. Shiva Chaudhary',
     image : doctor03,
     description : 'Dental officer'
        
    },
] 