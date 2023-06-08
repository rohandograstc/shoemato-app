import { Box, Grid, Typography } from "@mui/material";
import style from "@/components/Return/Return.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";

export default function ({ total_return, returned, pending }) {
  return (
    <Grid container md={4} spacing={2} justifyContent="space-between">
      <Grid item md={12}>
        <Box className={style.cardDiv}>
          <HeadingTypo variant="h5">Total Returns</HeadingTypo>
          <Box>
            <Typography variant="h1" className={style.cardValue}>
              {total_return}
            </Typography>
            <Typography variant="span" className={style.cardValueUnit}>
              Units
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={style.cardDiv}>
          <HeadingTypo variant="h5" fsize='18px'>Returned</HeadingTypo>
          <Box>
            <Typography variant="h1" className={style.cardValue}>
              {returned}
            </Typography>
            <Typography variant="span" className={style.cardValueUnit}>
              Units
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={style.cardDiv}>
          <HeadingTypo variant="h5" fsize='18px'>Pending Returns</HeadingTypo>
          <Box>
            <Typography variant="h1" className={style.cardValue}>
              {pending}
            </Typography>
            <Typography variant="span" className={style.cardValueUnit}>
              Units
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

