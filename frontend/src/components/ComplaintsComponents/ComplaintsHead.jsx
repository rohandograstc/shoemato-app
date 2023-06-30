import React from "react";
import { Grid } from "@mui/material";
import ComplaintsCards from "./ComplaintsCards/ComplaintsCards";
import TableCard from "./ComplaintsCards/TableCard";

const ComplaintsHead = () => {
  const cardArray = [
    {
      name: "Total Complaints",
      number: 30,
    },
    {
      name: "Resolved",
      number: 20,
    },
    {
      name: "Pending",
      number: 10,
    },
  ];

  const headArray = [
    {
      name: "Manufacturer",
      btnWidth: "150px",
      btnRadius: "10px",
      mrx: "10px",
    },
    {
      name: "Wholesaler",
      btnWidth: "150px",
      btnRadius: "10px",
      mrx: "10px",
    },
    {
      name: "Retailer",
      btnWidth: "150px",
      btnRadius: "10px",
      mrx: "10px",
    },
  ];
  return (
    <>
      <Grid
        style={{ padding: "0 20px" }}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid
          item
          xs={6}
          md={3.4}
          xl={3.4}
          sx={{ width: "fit-content", padding: "0px 30px" }}
        >
          <ComplaintsCards
            cardArray={cardArray}
            cwidth={"100%"}
            start={0}
            end={1}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={3.4}
          xl={3.4}
          sx={{ width: "fit-content", padding: "0px 30px" }}
        >
          <ComplaintsCards
            cardArray={cardArray}
            cwidth={"100%"}
            start={1}
            end={3}
          />
        </Grid>
        <Grid
          item
          xs={6}
          md={5.2}
          xl={5.2}
          sx={{ width: "fit-content", padding: "0px 0px 0 28px " }}
        >
          <TableCard headArray={headArray}/>
        </Grid>
      </Grid>
    </>
  );
};
export default ComplaintsHead;
