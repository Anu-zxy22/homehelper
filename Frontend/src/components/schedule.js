import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './schedule.css';
import { Link } from 'react-router-dom';

export default function BasicSelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  


  return (
    
    <div className="sched"><br></br><br></br><br></br>
    
    
    <h2>Fix schedule for assigned tasks</h2>
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Task</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Task"
        onChange={handleChange}
      >
        <MenuItem value={10}>Electricity</MenuItem>
          <MenuItem value={20}>Plumbing</MenuItem>
          <MenuItem value={30}>Cleaning</MenuItem>
          <MenuItem value={40}>Handymen</MenuItem>
          <MenuItem value={50}>Renovation</MenuItem>
          <MenuItem value={60}>Painting</MenuItem>
          <MenuItem value={70}>Laundry</MenuItem>
          <MenuItem value={80}>Babysit</MenuItem>
      </Select></FormControl><br></br><br></br>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Start time" />
      </DemoContainer>
    </LocalizationProvider><br></br>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="End time" />
      </DemoContainer>
    </LocalizationProvider><br></br><br></br>


    <Stack spacing={2} direction="row"><br></br><br></br><br></br>
     {/* <Button variant="text">Text</Button> */}
     <Button variant="contained">FIX SCHEDULE</Button>
     {/* <Button variant="outlined">Outlined</Button> */}
   </Stack>
   <br></br><br></br><br></br>
   

   </Box>
   
   </div>
    
   
  );
}