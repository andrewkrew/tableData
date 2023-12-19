import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectProps {
    text: string,
    value: string | number,
}

const COMPLETED_VALUES: SelectProps[] = [
    {
        text: 'all',
        value: 'all'
    },
    {
        text: 'completed',
        value: 'true'
    },    
    {
        text: 'not completed',
        value: 'false'
    },
];

const SORT_VALUES: SelectProps[] = [
    {
        text: 'id',
        value: 'id'
    },
    {
        text: 'title',
        value: 'title'
    },    
];  

const ORDER_ID_VALUES: SelectProps[] = [
    {
        text: 'from least to most',
        value: 'asc'
    },
    {
        text: 'from most to least',
        value: 'desc'
    },    
]; 

const ORDER_TITLE_VALUES: SelectProps[] = [
    {
        text: 'from A to Z',
        value: 'asc'
    },
    {
        text: 'from Z to A',
        value: 'desc'
    },    
]; 


export const SelectFilter = ({query}: {query: 'status' | 'sortBy' | 'order'}) => {
    
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}