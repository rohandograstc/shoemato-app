import DailyQueue from "@/components/DashboardComponents/DailyQueue";
import SummaryCards from "@/components/DashboardComponents/SummaryCards";
import Transactions from "@/components/DashboardComponents/Transactions";
import React from "react";

export default function DashBoard() {
  return (
    <>
      <SummaryCards />
      <DailyQueue />
      <Transactions />
    </>
  );
}
