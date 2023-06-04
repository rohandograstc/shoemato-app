import DailyQueue from "@/components/DashboardComponents/DailyQueue";
import SummaryCards from "@/components/DashboardComponents/SummaryCards";
import Transactions from "@/components/DashboardComponents/Transactions";
import React from "react";

const DashBoard = () => {
  return (
    <>
      <SummaryCards />
      <DailyQueue />
      <Transactions />
    </>
  );
};
export default DashBoard;
