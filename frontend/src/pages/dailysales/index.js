import React from 'react';
import SummaryCards from "@/components/Dailysales/SummaryCards";
import DailysalesTable from '@/components/Dailysales/TableComponent/DailysalesTable'
import DailysalesTableHead from '@/components/Dailysales/TableComponent/DailysalesTableHead'

export default function () {
    return (
        <>
            <SummaryCards />
            <DailysalesTableHead />
            <DailysalesTable />
        </>
    );
}