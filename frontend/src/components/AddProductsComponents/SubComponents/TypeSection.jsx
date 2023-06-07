import ArrowDownIcon from "@/assets/svg/arrowDown";
import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import InputField from "./InputField";
import styles from "../addproducts.module.css";
import { placeHolderStyle } from "../ProductsForm";

const TypeSection = () => {
  const numArr = [11, 10, 9, 8, 7];
  return (
    <Box className={styles.inputFieldCon}>
      <Box className={styles.typeCon}>
        <Box className={styles.quantityCon}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            className={styles.dropdownText}
            IconComponent={() => <ArrowDownIcon />}
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #0D1A26",
              },
              padding: "5px",
              paddingRight: "10px",
              "#demo-simple-select": {
                paddingRight: "10px",
                paddingLeft: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
              },
            }}
          >
            <MenuItem value={1}>{"TYPE"}</MenuItem>
            <MenuItem value={2}>Small</MenuItem>
            <MenuItem value={3}>Medium</MenuItem>
          </Select>
          <OutlinedInput
            className={`${styles.inputQuanStyle}`}
            id="outlined-adornment-name"
            placeholder={"Quantity"}
            inputProps={{
              "aria-label": "name",
              style: { padding: "10px" },
            }}
            sx={placeHolderStyle}
          />
        </Box>
        <Box className={styles.inputFieldCon}>
          <InputField placeHolder={"Highest %"} />
          <InputField placeHolder={"Lowest %"} />
        </Box>
      </Box>
      <Box className={styles.numBtnCon}>
        {numArr.map((num, i) => (
          <Button key={i} className={styles.typeBtn}>
            <Typography variant="span" className={styles.typeBtnText}>
              {num}
            </Typography>
          </Button>
        ))}
        <AddIcon
          sx={{
            fontSize: "35px",
            fontWeight: 200,
            backgroundColor: "#0D1A26",
            color: "white",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Box>
  );
};

export default TypeSection;
