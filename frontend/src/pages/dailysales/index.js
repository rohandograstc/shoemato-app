import React, { useState } from 'react';
import SummaryCards from "@/components/Dailysales/SummaryCards";
import DailysalesTable from '@/components/Dailysales/TableComponent/DailysalesTable'
import DailysalesTableHead from '@/components/Dailysales/TableComponent/DailysalesTableHead'
import OrderStatus from '@/components/Dailysales/OrderStatusComponents/OrderStatus';


const Dailysales = () => {
    const [details, setDetails] = useState({
        orderId: '', show: true
    })

    return (
        <>
            <SummaryCards />
            <DailysalesTableHead />
            <DailysalesTable />
        </>
    );
}
export default Dailysales;
