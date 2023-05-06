import { Grid } from '@mui/material'
import React from 'react'
import Brands from './Brands'
import TableInfo from './TableInfo'

export default function Transactions() {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={9} xl={8}>
            <TableInfo/>
        </Grid>
        <Grid item xs={5} md={3} xl={4}>
          <Brands/>
        </Grid>
    </Grid>
  )
}
