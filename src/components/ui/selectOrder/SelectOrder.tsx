import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setOrder } from '../../../redux';
import { SelectElement } from '../selectElement';

export const SelectOrder = () => {
    
	const dispatch = useAppDispatch();
	const {sortBy, order} = useAppSelector(filterSelector);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setOrder(event.target.value));
	};

  return (
    <>
			{sortBy === 'id' 
				? <SelectElement label={'Order'} handleChange={handleChange} parametr={order}>
					<MenuItem value={'asc'}>from low to high</MenuItem>
					<MenuItem value={'desc'}>from high to low</MenuItem>
				</SelectElement> 
				: <SelectElement label={'Order'} handleChange={handleChange} parametr={order}>
					<MenuItem value={'asc'}>from A to Z</MenuItem>
					<MenuItem value={'desc'}>from Z to A</MenuItem>
				</SelectElement>}
    </>
  );
}