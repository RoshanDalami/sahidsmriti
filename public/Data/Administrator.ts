import { nanoid } from "nanoid";
import Manager from '../assets/administator/manager.jpeg';
import Accountant from '../assets/administator/accountant.jpeg'
import store from '../assets/administator/store.jpeg'
import rec from '../assets/administator/rec.jpeg'

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
        image : rec,
        degniation:'Receptionist',
    },
    // {
    //     id:nanoid(),
    //     title : 'Narayan Parajuli',
    //     image : store,
    //     degniation:'Store keeper',
    // },
]

