import { Grid, Typography } from '@mui/material'
import React from 'react'
import Brands from './Brands'

export default function Transactions() {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={9}>
            <Typography variant='h3' >Hello world</Typography>
        </Grid>
        <Grid item xs={5} md={3}>
          <Brands/>
        </Grid>
    </Grid>
  )
}
