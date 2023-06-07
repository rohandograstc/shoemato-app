import { useState } from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ShoeImg1 from "@/assets/shoes_1.svg";
import nextIcon from "@/assets/next.svg";
import prevIcon from "@/assets/prev.svg";
import Link from "next/link";

const img_arr = [ShoeImg1];
export default function () {
  const [imgID, setImgID] = useState(0);
  return (
    <Stack sx={{height:'50vh', display:'flex', flexDirection:'column', alignItems:'center'}}>
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

