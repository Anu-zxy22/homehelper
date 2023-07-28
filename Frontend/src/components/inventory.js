import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sofa','nil','$200,000', 24, 40),
  createData('Kitchenware','glassware','$1000', 37, 43),
  createData('Refridgerator','nil', '$400,000', 24,50),
  createData('Dining furniture','nil', '$100,000', 67, 53),
//   createData('Gingerbread',, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className="inven">
        <h2>Inventory List</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stock </TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Reorder time(Days)</TableCell>
            <TableCell align="right">Quantity in reorder</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      
    </TableContainer><br></br><br></br>
    <img align="left"
        src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"40px",width:"40px" }} 
      /> <br></br> ADD TO LIST
    </div>
  );
}