import { Box } from "@mui/material";
import React from "react";
import InputField from "../AddProductsComponents/SubComponents/ProductFormComp/InputField";

import styles from "./addVendor.module.css";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import AddressField from "./AddressField";

const Form = () => {
  return (
    <Box>
      <SelectField name={"CATEGORY"} />
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"VENDOR NAME"} />
        <InputField placeHolder={"VENDOR EMAIL"} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"VENDOR CODE"} />
        <InputField placeHolder={"VENDOR CREDIT LIMIT"} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"PHONE NUMBER"} />
        <InputField placeHolder={"VENDOR GL CODE"} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"GST NO"} fullw={true} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <AddressField />
      </Box>
      <SelectField name={"VERIFICATION DOCUMENT"} />
      <FormButton />
    </Box>
  );
};

export default Form;
