import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styledComponents/SearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Stack, Box, Select, MenuItem } from "@mui/material";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import style from "@/components/Dailysales/Dailysales.module.css";
import MyCustomIcon from "@/assets/svg/dropdownIcon";

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
      <Stack direction="row" spacing={0} className={style.tableHeadBtn}>
        {headArray.map((headData, index) => (
          <StyledButton
            key={index}
            variant="contained"
            btnwidth={headData.btnWidth}
            btnradius={headData.btnRadius}
            sx={{
              marginRight: headData.mrx,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            bgcolor={headData?.bgcolor}
            tcolor={headData?.tcolor}
            btnpad={"7px 20px"}
            boxshdw ={headData?.boxShadow}
          >
            <HeadingTypo variant="h4">{headData.name}</HeadingTypo>
          </StyledButton>
        ))}
      </Stack>

      <Stack direction="row" spacing={0}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            className={style.calendar}
            IconComponent={() => <MyCustomIcon />}
            sx={{
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              paddingLeft: "10px",
              paddingRight: "10px",
              "#demo-simple-select": {
                paddingRight: "3px",
                paddingLeft: 0,
              },
            }}
          >
            <MenuItem value={1} disabled>Calendar</MenuItem>
            <MenuItem value={2}>Monthly</MenuItem>
            <MenuItem value={3}>Yearly</MenuItem>
            <MenuItem value={4}>Days</MenuItem>
          </Select>

        <Search>
          <StyledInputBase
            searchwidth={"150px"}
            placeholder="Search"
            inputProps={{
              "aria-label": "search",
            }}
            sx={{
              border: "0.3px solid #ecedec",
              boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              height:'35px',
              width:'150px'
            }}
          />
          <SearchIconWrapper sx={{ height: "auto" }}>
            <SearchIcon sx={{ color: "black" }} />
          </SearchIconWrapper>
        </Search>
        <AutorenewIcon
          sx={{
            backgroundColor: "#0D1A26",
            color: "white",
            borderRadius: "100%",
            fontSize: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            cursor:'pointer'
          }}
        />
      </Stack>
    </Box>
  );
};

const headArray = [
  {
    name: "Manufacturers",
    btnWidth: "fit-content",
    btnRadius: "15px 0px 0px 0px",
    mrx: "5px",
  },
  {
    name: "Wholesalers",
    btnWidth: "fit-content",
    btnRadius: "0px",
    mrx: "5px",
    bgcolor: "white",
    tcolor: "black",
  },
  {
    name: "Retailers",
    btnWidth: "fit-content",
    btnRadius: "0px 10px 10px 0px",
    mrx: "10px",
    bgcolor: "white",
    tcolor: "black",
    boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, 0.1)'
  },
];

export default DailysalesTableHead;
