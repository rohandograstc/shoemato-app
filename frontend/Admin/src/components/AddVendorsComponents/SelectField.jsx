import { Select, MenuItem, Typography } from "@mui/material";
import styles from "./addVendor.module.css";

const SelectField = ({name}) => {
  return (
    <Select
      value={""}
      displayEmpty
      inputProps={{
        "aria-label": "Without label",
      }}
      className={styles.selectField}
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          border: "1px solid #232321",
          "&.Mui-focused": { borderColor: "#232321" },
          "&:hover": { borderColor: "#232321" },
        },
        paddingLeft: "0px",
        paddingRight: "10px",
        "#demo-simple-select": {
          paddingRight: "3px",
          paddingLeft: 0,
        },
      }}
    >
      <MenuItem value="">
        <Typography variant="h3" className={styles.selectFieldText}>
          {name}
        </Typography>
      </MenuItem>
      <MenuItem value={10}>
        <Typography variant="p" className={styles.selectFieldText}>
          Ten
        </Typography>
      </MenuItem>
      <MenuItem value={20}>
        <Typography variant="p" className={styles.selectFieldText}>
          Twenty
        </Typography>
      </MenuItem>
      <MenuItem value={30}>
        <Typography variant="p" className={styles.selectFieldText}>
          Thirty
        </Typography>
      </MenuItem>
    </Select>
  );
};

export default SelectField;
