import { OutlinedInput } from "@mui/material";

import styles from "../addproducts.module.css";
import { placeHolderStyle, smallplaceHolderStyle } from "../ProductsForm";

const InputField = ({ placeHolder, small }) => {
  return (
    <OutlinedInput
      className={small ? `${styles.smallInput}` : `${styles.inputStyle}`}
      id="outlined-adornment-name"
      placeholder={placeHolder}
      inputProps={{
        "aria-label": "name",
        style: { padding: "10px" }
      }}
      sx={small ? smallplaceHolderStyle : placeHolderStyle}
    />
  );
};

export default InputField;
