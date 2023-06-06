import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styledComponents/SearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Select, MenuItem } from "@mui/material";

const DailysalesTableHead = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        justifyContent: "space-between",
        padding: "0 30px 0 0",
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Calendar"
        sx={{width:200}}
      >
        <MenuItem>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{height:180, width:250}}>
            <DateCalendar />
          </LocalizationProvider>
        </MenuItem>
      </Select>

      <Search>
        <StyledInputBase
          searchwidth={"100px"}
          placeholder="Search"
          inputProps={{
            "aria-label": "search",
          }}
          sx={{
            border: "0.3px solid #ecedec",
            boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        />
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "black" }} />
        </SearchIconWrapper>
      </Search>
      <AutorenewIcon
        sx={{
          backgroundColor: "#fff",
          color: "black",
          borderRadius: "100%",
          fontSize: "30px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Box>
  );
};
export default DailysalesTableHead;
