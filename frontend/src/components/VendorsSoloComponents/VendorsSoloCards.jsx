import { Box, Grid } from "@mui/material";
import React from "react";
import ChartCard from "../ChartCard";
import EarningReports from "./EarningReports";
import SoloTableInfo from "./SoloTableInfo";
import { inventoryRows, inventoryTableHead } from "./inventoryConstant";

const VendorsSoloCards = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: "0 30px", marginTop: "10px" }}
      >
        <Grid
          item
          xs={6}
          md={3.2}
          xl={3.2}
          sx={{ width: "fit-content", marginRight: "20px" }}
        >
          <ChartCard smallChart={true} />
        </Grid>
        <Grid
          item
          xs={6}
          md={3.2}
          xl={3.2}
          sx={{ width: "fit-content", marginRight: "10px" }}
        >
          <EarningReports />
        </Grid>
        <Grid item xs={6} md={5.2} xl={5.2}>
          <SoloTableInfo
            tableName={"Inventory"}
            tablesizeFixed={true}
            rows={inventoryRows}
            tableHead={inventoryTableHead}
            twidth={"24%"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default VendorsSoloCards;
