import { OutlinedInput } from "@mui/material";

import styles from "../../addproducts.module.css";
import { placeHolderStyle, smallplaceHolderStyle } from "../../ProductsForm";

const InputField = ({ placeHolder, small, center, fullw }) => {
  return (
    <OutlinedInput
      classes={{
        notchedOutline: styles.notchedOutline,
      }}
      className={`${small ? styles.smallInput : fullw ? styles.inputBigStyle  : styles.inputStyle}`}
      id="outlined-adornment-name"
      placeholder={placeHolder}
      inputProps={{
        "aria-label": "name",
        style: { padding: "10px 10px 10px 15px" },
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
