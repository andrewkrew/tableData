import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setSort } from '../../../redux';
import { SelectElement } from '../selectElement';

export const SelectSort = () => {
    
	const dispatch = useAppDispatch();
	const {sortBy} = useAppSelector(filterSelector);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setSort(event.target.value));
	};

  return (
    <>
			<SelectElement label={'SortBy'} callback={handleChange} parametr={sortBy}>
				<MenuItem value={'id'}>ID</MenuItem>
        <MenuItem value={'title'}>Title</MenuItem>
			</SelectElement>
    </>
  );
}