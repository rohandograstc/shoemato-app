import { Grid } from '@mui/material'
import React from 'react'
import Brands from './TransactionsComponent/Brands'
import TableInfo from './TransactionsComponent/TableInfo'


export default function Transactions() {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={9} xl={9}>
            <TableInfo/>
        </Grid>
        <Grid item xs={5} md={3} xl={3}>
          <Brands/>
        </Grid>
    </Grid>
  )
}
