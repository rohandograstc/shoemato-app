import Piechart from './Piechart';
import Graph from './Graph';
import Card from './Cards';
import { Stack } from '@mui/material';

const Stats = ({total_return, returned, pending})=>{
    return(
        <Stack direction='row' justifyContent='space-around'>
            <Card total_return={total_return} returned={returned} pending={pending}/>
            <Graph />
            <Piechart/>
        </Stack>
    )
}

export default Stats;
