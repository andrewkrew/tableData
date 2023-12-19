import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setStatus } from '../../../redux';

export const SelectCompleted = () => {

    const dispatch = useAppDispatch();
    const {status} = useAppSelector(filterSelector);
  
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setStatus(event.target.value));
    };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Completed</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status.toString()}
          onChange={handleChange}
          label="Completed"
        >
          <MenuItem value={-1}>None</MenuItem>
          <MenuItem value={1}>Completed</MenuItem>
          <MenuItem value={0}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}