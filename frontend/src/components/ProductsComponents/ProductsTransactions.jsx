import { Grid } from '@mui/material'
import React from 'react'
import ProdTableInfo from './TransactionsComponents/ProdTableInfo'
import Brands from '../Brands'

const ProductsTransactions = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={7} md={8.7} xl={9}>
            <ProdTableInfo/>
        </Grid>
        <Grid item xs={5} md={3.3} xl={3}>
          <Brands report={false} />
        </Grid>
    </Grid>
  )
}

export default ProductsTransactions
