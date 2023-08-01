import { nanoid } from "nanoid";
import board01 from "../assets/BoardMember/boardMember01.jpeg";
import board02 from "../assets/BoardMember/boardMember02.jpeg";
import board03 from "../assets/doctor01.jpeg";
import board04 from "../assets/doctor01.jpeg";

export const BoardMember = [
  {
    id: nanoid(),
    title: "Dil Bahadur thapa",
    image: board01,
    degniation : 'Secretary '
  },
  {
    id: nanoid(),
    title: "Urmila thapa Chhetri",
    image: board01,
    degniation : 'Board Member'
  },
  {
    id: nanoid(),
    title: "Laxmi bhusal kharel",
    image: board01,
    degniation : 'Board Member'
  },
  {
    id: nanoid(),
    title: "Sita Bhandari",
    image: board02,
    degniation : 'Board Member'
  },
];
