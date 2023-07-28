import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Available workers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Available workers"
          onChange={handleChange}
        >
          <MenuItem value={10}>Zara</MenuItem>
          <MenuItem value={20}>AZ Movers</MenuItem>
          <MenuItem value={30}>Aceable</MenuItem>
        </Select>
      </FormControl><br></br><br></br>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">To-do task</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="To-do task"
          onChange={handleChange}
        >
          <MenuItem value={10}>Electricity</MenuItem>
          <MenuItem value={20}>Plumbing</MenuItem>
          <MenuItem value={30}>Cleaning</MenuItem>
          <MenuItem value={10}>Handymen</MenuItem>
          <MenuItem value={20}>Renovation</MenuItem>
          <MenuItem value={30}>Painting</MenuItem>
          <MenuItem value={10}>Laundry</MenuItem>
          <MenuItem value={20}>Babysit</MenuItem>
        </Select>
      </FormControl><br></br><br></br><br></br>
    
     <Stack spacing={2} direction="row"><br></br><br></br><br></br>
     {/* <Button variant="text">Text</Button> */}
     <Button variant="contained">ASSIGN</Button>
     {/* <Button variant="outlined">Outlined</Button> */}
   </Stack>
   </Box>

    
  );
}