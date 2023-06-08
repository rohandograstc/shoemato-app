// AutoCompleteComponent
import React from "react";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";

import styles from "../../addproducts.module.css";
import { StyledButton } from "@/styledComponents/StyledBtn";

const AutoCompleteComponent = () => {
  const tagOptions = [
    { title: "Nike" },
    { title: "Adidas" },
    { title: "Puma" },
    { title: "Reebok" },
  ];

  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    if (!age.includes(event.target.value)) setAge([...age, event.target.value]);
    else setAge(age.filter((value) => value !== event.target.value));
  };

  return (
    <Box sx={{ display: "flex", width: "50%" }}>
      <Select
        value={""}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          "& .MuiSelect-select": {
            padding: "0",
            paddingRight: "0 !important",
            border: "none",
            borderRadius: "8px 0 0 8px",
          },
          "& .MuiSelect-icon": {
            display: "none",
          },
        }}
      >
        <MenuItem value="">
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
        </MenuItem>
        {tagOptions.map((data, i) => (
          <MenuItem
            key={i}
            sx={{
              margin: "2px",
            }}
            value={data?.title}
          >
            {data?.title}
          </MenuItem>
        ))}
      </Select>
      <Box
        sx={{
          display: "flex",
          border: "0.5px solid #000000",
          width: "100%",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {age?.map((name, i) => (
          <Button key={i} className={styles.tagsItemsTypoCon}>
            <Typography variant="p" className={styles.tagsItemsTypo}>
              {name}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AutoCompleteComponent;
