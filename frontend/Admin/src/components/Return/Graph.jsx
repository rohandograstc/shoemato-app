import style from "./Return.module.css";
import { Box, Grid, MenuItem, Select, Paper } from "@mui/material";
import styles from "@/components/DashboardComponents/dashboard.module.css";
import { BorderLinearProgress } from "@/styledComponents/BorderLinearProgress";
import MyCustomIcon from "@/assets/svg/dropdownIcon";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { CellTypo } from "@/styledComponents/CellTypo";

const MonthlySelect = () => {
  return (
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
      <MenuItem value={1}>Monthly</MenuItem>
      <MenuItem value={2}>Yearly</MenuItem>
      <MenuItem value={3}>Days</MenuItem>
    </Select>
  );
};

const Graph = () => {
  const vendorNameArray = [
    {
      name: "Vendor",
      value: 80,
      color: "#FE9496",
      sales: "23,400",
    },
    {
      name: "B",
      value: 40,
      color: "#4BCBEB",
      sales: "15,00",
    },
    {
      name: "C",
      value: 95,
      color: "#FE9496",
      sales: "30,000",
    },
    {
      name: "D",
      value: 40,
      color: "#4BCBEB",
      sales: "22,000",
    },
    {
      name: "E",
      value: 20,
      color: "#4BCBEB",
      sales: "23,400",
    },
    {
      name: "F",
      value: 80,
      color: "#FE9496",
      sales: "23,400",
    },
    {
      name: "G",
      value: 15,
      color: "#4BCBEB",
      sales: "5,000",
    },
  ];

  return (
    <Grid container md={3.5}>
      <Grid item md={12}>
        <Paper className={styles.vendorsComponent}>
          <Box className={styles.venderHeader}>
            <HeadingTypo variant="h5">Returns</HeadingTypo>
            <MonthlySelect />
          </Box>
          <Box sx={{ height: "80%" }} className={styles.venderInfoContainer}>
            {vendorNameArray.map((vendorData, index) => (
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                className={styles.vendorInfo}
                key={index}
              >
                <Grid item xs={2} md={3}>
                  <CellTypo variant="h5" fsize={"12.46px"}>
                    {vendorData.name}
                  </CellTypo>
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={9}
                  className={styles.progressBar}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <BorderLinearProgress
                    value={vendorData.value}
                    variant="determinate"
                    bg={vendorData.color}
                    sx={{ width: `${vendorData.value}%` }}
                  />
                  <CellTypo variant="h5" fsize={"12.46px"}>
                    {vendorData.sales}
                  </CellTypo>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Graph; 
