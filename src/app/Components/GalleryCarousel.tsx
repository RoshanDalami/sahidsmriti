"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image01 from "../../../public/assets/Dental01.jpeg";
import image02 from "../../../public/assets/dental.jpeg";
import otImage1 from '../../../public/assets/operation01.jpeg'
import otImage2 from '../../../public/assets/operation02.jpeg'
import otImage3 from '../../../public/assets/operation03.jpeg'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CarouselGallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const DentalImage = [image01, image02, image01, image02];

  const itemDental = DentalImage.map((image, index) => {
    return (
      <div className="shadow  transition-all px-3 "  key={index}>
        <Image
          src={image}
          alt=""
          className=" object-cover h-96 mx-10 rounded "
        />
        </div>
      
    );
  });
  const OTImage = [otImage1,otImage2,otImage3,otImage2,otImage3]
  const itemOT = OTImage.map((image, index) => {
    return (
      <div className="shadow  transition-all px-3 " key={index}>
        <Image
          src={image}
          alt=""
          className=" object-cover h-96 mx-10 rounded "
        />
        </div>
      
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-center text-4xl my-4">Dental Gallery</h1>
        <Slider {...config}>{itemDental}</Slider>
      </div>
      <div className="w-full">
        <h1 className="text-center text-4xl my-4">Operation Theater Gallery</h1>
        <Slider {...config}>{itemOT}</Slider>
      </div>
    </div>
  );
}

// export default function BasicModal() {
//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
