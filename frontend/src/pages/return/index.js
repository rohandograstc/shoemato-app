import Stats from '@/components/Return/Stats';
import Table from '@/components/Return/Table';

export default function () {
    return (
        <>
            <Stats total_return={10000} returned={5} pending={5}/>
            <Table/>
        </>
    )
}