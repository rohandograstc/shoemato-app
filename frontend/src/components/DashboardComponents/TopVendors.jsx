import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { BorderLinearProgress } from "@/styledComponents/NavComponents";
export default function TopVendors() {
  return (
    <Paper className={styles.vendorsComponent}>
      <Box className={styles.venderHeader}>
        <Typography variant="h3" className={styles.vendorsTitle}>
          Top Vendors
        </Typography>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            className={styles.customSelectRoot}
            sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
          >
            <MenuItem value={1}>Monthly</MenuItem>
            <MenuItem value={2}>Yearly</MenuItem>
            <MenuItem value={3}>Days</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ height: "80%" }} className={styles.venderInfoContainer}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              Vendors
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={80}
              variant="determinate"
              bg="#FE9496"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              B
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={20}
              variant="determinate"
              bg="#4BCBEB"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              C
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={70}
              variant="determinate"
              bg="#FE9496"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              D
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={10}
              variant="determinate"
              bg="#4BCBEB"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              E
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={25}
              variant="determinate"
              bg="#4BCBEB"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              F
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={90}
              variant="determinate"
              bg="#FE9496"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={styles.vendorInfo}
        >
          <Grid item xs={2} md={3}>
            <Typography variant="h5" className={styles.vendorName}>
              G
            </Typography>
          </Grid>
          <Grid item xs={10} md={9} className={styles.progressBar}>
            <BorderLinearProgress
              value={5}
              variant="determinate"
              bg="#4BCBEB"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
