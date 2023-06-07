// AutoCompleteComponent
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

import styles from "./addproducts.module.css";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { smallplaceHolderStyle } from "./ProductsForm";

const AutoCompleteComponent = () => {
  const tagOptions = [
    { title: "Nike" },
    { title: "Adidas" },
    { title: "Puma" },
    { title: "Reebok" },
  ];

  return (
    <Autocomplete
      multiple
      id="size-small-standard-multi"
      size="small"
      sx={{
        "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
          padding: 0,
          paddingRight: "39px",
        },
      }}
      options={tagOptions}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          className={styles.autoCompStyle}
          sx={smallplaceHolderStyle}
          {...params}
          InputProps={{
            startAdornment: (
              <StyledButton
                btnradius={"8px 0px 0px 8px"}
                variant="contained"
                btnwidth={"120px"}
                btnmrb={"0"}
              >
                <Typography variant="p" className={styles.tagTypo}>
                  Tags
                </Typography>
              </StyledButton>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoCompleteComponent;
