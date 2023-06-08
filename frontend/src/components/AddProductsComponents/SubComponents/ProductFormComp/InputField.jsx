import { OutlinedInput } from "@mui/material";

import styles from "../../addproducts.module.css";
import { placeHolderStyle, smallplaceHolderStyle } from "../../ProductsForm";

const InputField = ({ placeHolder, small, center }) => {
  return (
    <OutlinedInput
      classes={{
        notchedOutline: styles.notchedOutline,
      }}
      className={`${small ? styles.smallInput : styles.inputStyle}`}
      id="outlined-adornment-name"
      placeholder={placeHolder}
      inputProps={{
        "aria-label": "name",
        style: { padding: "10px" },
      }}
      sx={
        small
          ? smallplaceHolderStyle
          : center
          ? {
              ...placeHolderStyle,
              "& .MuiInputBase-input": {
                "::placeholder": {
                  ...placeHolderStyle["& .MuiInputBase-input"]["::placeholder"],
                  textAlign: "center",
                },
              },
            }
          : placeHolderStyle
      }
    />
  );
};

export default InputField;
