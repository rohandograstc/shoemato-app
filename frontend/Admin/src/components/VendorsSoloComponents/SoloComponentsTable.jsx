import { Grid } from "@mui/material";
import React from "react";
import SoloTableInfo from "./SoloTableInfo";
import { rows, tableHead } from "./constants";
import { retailerRows, retailerTableHead } from "./retailerConstant";

const SoloComponentsTable = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          padding: "30px",
        }}
      >
        <Grid item xs={6} md={6} xl={6}>
          <SoloTableInfo
            tableName={"Wholesaler"}
            rows={rows}
            tableHead={tableHead}
            twidth={"32%"}
          />
        </Grid>
        <Grid item xs={6} md={6} xl={6}>
          <SoloTableInfo
            tableName={"Retailer"}
            rows={retailerRows}
            tableHead={retailerTableHead}
            twidth={"32%"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SoloComponentsTable;
