import React, { useState } from 'react';
import SummaryCards from "@/components/Dailysales/SummaryCards";
import DailysalesTable from '@/components/Dailysales/TableComponent/DailysalesTable'
import DailysalesTableHead from '@/components/Dailysales/TableComponent/DailysalesTableHead'
import OrderStatus from '@/components/Dailysales/OrderStatusComponents/OrderStatus';

export default function () {
    const [details, setDetails] = useState({
        orderId: '', show: true
    })

    return (
        <>
            {details.show ?
                <>
                    <SummaryCards />
                    <DailysalesTableHead />
                    <DailysalesTable setDetails={setDetails} />
                </> :
                <OrderStatus details={details} setDetails={setDetails}/>
            }
        </>
    );
}