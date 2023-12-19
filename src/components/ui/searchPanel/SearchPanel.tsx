import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setSearchValue } from '../../../redux';
// import { useDebounce } from '../../../shared/hooks/useDebounce';

export const SearchPanel = () => {
  
    const dispatch = useAppDispatch();
    const {search} = useAppSelector(filterSelector);
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(setSearchValue(event.target.value));
    };

		// useDebounce(handleChange, 1000, [search])

	return (
		<TextField 
			id="outlined-search" 
			label="Search field" 
			type="search" 
			value={search}
			// onChange={handleChange}
			onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
		/>
	)
}