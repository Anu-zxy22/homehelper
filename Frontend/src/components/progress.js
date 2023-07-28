import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import './progress.css';

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['grey', 'pink', 'pink'];
const defaul = ['grey', 'pink', 'pink'];
const item = ['grey', 'pink', 'pink'];

export default function PieColor() {
  return (
    <div classname="bg">
    <Stack direction="row" width="100%" textAlign="center" spacing={2} >
      <Box flexGrow={1}>
        <br></br><br></br><br></br>
        <Typography>Clean</Typography>
        <PieChart
        colors={defaul}
          series={[{ data: [{ value: 70 }, { value: 30 }, { value: 30 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
      <br></br><br></br><br></br>
        <Typography>Paint</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 10 }, { value: 90 }, { value: 90 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
      <br></br><br></br><br></br>
        <Typography>Plumbing</Typography>
        <PieChart
        colors={item}
          series={[
            { data: [{ value: 90 }, { value: 10 }, { value: 10 }] },
          ]}
          {...pieParams}
        />
        
      </Box>
      
    </Stack>
    <br></br><br></br>
    
  <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1690189458/progres_vpk3hq.jpg"  style={{ marginLeft:"80px" }}/>
         
    </div>
  );
}