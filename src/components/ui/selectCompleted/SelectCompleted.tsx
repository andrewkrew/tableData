import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/useRedux';
import { filterSelector } from '../../../redux/selectors';
import { setStatus } from '../../../redux';
import { SelectElement } from '../selectElement';

export const SelectCompleted = () => {

	const dispatch = useAppDispatch();
	const {status} = useAppSelector(filterSelector);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setStatus(event.target.value));
	};

  return (
    <>
			<SelectElement label={'Complete'} callback={handleChange} parametr={status.toString()}>
				<MenuItem value={''}>Show all</MenuItem>
        <MenuItem value={1}>Completed</MenuItem>
        <MenuItem value={0}>Not completed</MenuItem>
			</SelectElement>
    </>
  );
}