import { useState } from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ShoeImg1 from "@/assets/shoes_1.svg";
import nextIcon from "@/assets/next.svg";
import prevIcon from "@/assets/prev.svg";
import Link from "next/link";
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';

const img_arr = [ShoeImg1];
const Carousel = () => {
  const [imgID, setImgID] = useState(0);
  return (
    <Stack sx={{height:'50vh', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Link
        href="#"
        style={{marginTop:'40px',marginBottom:'-55px', marginRight:'-290px', zIndex:1}}
      >
        <ZoomOutMapOutlinedIcon style={{color:'black'}}/>
      </Link>
      <Image src={img_arr[imgID]}></Image>
      <Stack direction='row'>
      <Link
        href="#"
        style={{margin:'-50px 15px'}}
        onClick={() => setImgID((img_arr.length + imgID - 1) % img_arr.length)}
      >
        <Image src={prevIcon}></Image>
      </Link>
      <Link
        href="#"
        style={{margin:'-50px 15px'}}
        onClick={() => setImgID((imgID + 1) % img_arr.length)}
      >
        <Image src={nextIcon}></Image>
      </Link>
      </Stack>
    </Stack>
  );
}

export default Carousel;
