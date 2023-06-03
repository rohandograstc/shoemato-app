import ProductsSummaryCards from "@/components/ProductsComponents/ProductsSummaryCards";
import ProductsTransactions from "@/components/ProductsComponents/ProductsTransactions";
import React from "react";

const DashBoard = () => {
  return (
    <React.Fragment>
      <ProductsSummaryCards />
      <ProductsTransactions/>
    </React.Fragment>
    
  );

};
export default DashBoard;
