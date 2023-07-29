import Stats from '@/components/Return/Stats';
import Table from '@/components/Return/Table';

const Return = () => {
    return (
        <>
            <Stats total_return={10000} returned={5} pending={5}/>
            <Table/>
        </>
    )
}
export default Return;
