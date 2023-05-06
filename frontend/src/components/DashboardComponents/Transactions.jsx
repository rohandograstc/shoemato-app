import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Transactions() {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={9}>
            <Typography variant='h3' >Hello world</Typography>
        </Grid>
        <Grid item xs={5} md={3}>
        <Typography variant='h3' >Hello world</Typography>
        </Grid>
    </Grid>
  )
}
