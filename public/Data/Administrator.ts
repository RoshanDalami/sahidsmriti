import { nanoid } from "nanoid";
import Manager from '../assets/administator/manager.jpeg';
import Accountant from '../assets/administator/accountant.jpeg'

export const Administrator = [
    {
        id:nanoid(),
        title : 'Tikaram Luitel',
        image : Manager,
        degniation:'Manager',
    },
    {
        id:nanoid(),
        title : 'Gopal Sunar',
        image : Accountant,
        degniation:'Accountant',
    },
    {
        id:nanoid(),
        title : 'Sabita Neupane',
        image : Manager,
        degniation:'Receptionist',
    },
    {
        id:nanoid(),
        title : 'Narayan Parajuli',
        image : Manager,
        degniation:'Store keeper',
    },
]

