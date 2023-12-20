import { ChangeEvent } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setPage, setSearchValue } from '../../../redux';
import SearchIcon from '@mui/icons-material/Search';

export const SearchPanel = () => {
  
    const dispatch = useAppDispatch();
    const {search} = useAppSelector(filterSelector);
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(setSearchValue(event.target.value));
			dispatch(setPage(1))
    };

	return (
		<TextField 
			id="outlined-search" 
			label="Search field" 
			type="search" 
			value={search}
			onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
			InputProps={{
				startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
			}}
		/>
	)
}