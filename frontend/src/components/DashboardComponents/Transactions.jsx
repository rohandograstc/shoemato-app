import { Grid } from '@mui/material'
import React from 'react'
import Brands from '../Brands'
import TableInfo from './TransactionsComponent/TableInfo'


const Transactions = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={8.7} xl={9}>
            <TableInfo/>
        </Grid>
        <Grid item xs={5} md={3.3} xl={3}>
          <Brands report={true}/>
        </Grid>
    </Grid>
  )
}

export default Transactions
