import { OutlinedInput } from "@mui/material";
import { placeHolderStyle } from "../AddProductsComponents/ProductsForm";

import styles from "./addVendor.module.css";

const AddressField = () => {
  return (
    <OutlinedInput
      classes={{
        notchedOutline: styles.notchedOutline,
      }}
      id="filled-multiline-static"
      multiline
      rows={4}
      placeholder="ADDRESS"
      sx={{
        width: "100%",
        ...placeHolderStyle,
        "& .MuiInputBase-input": {
          "::placeholder": {
            ...placeHolderStyle["& .MuiInputBase-input"]["::placeholder"], // paddingTop: "10px",
          },
        },
        paddingTop: "20px",
        borderRadius: "10px",
      }}
    />
  );
};
export default AddressField;
