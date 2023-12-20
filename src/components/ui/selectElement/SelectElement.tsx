import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../../../shared/hooks/useRedux';
import { setPage } from '../../../redux';

export const SelectElement = (
	{label, callback, parametr, children}
	: {label: string, callback: (event: SelectChangeEvent) => void, parametr: string, children: React.ReactNode}
) => {

	const dispatch = useAppDispatch();

	const handleChange = (event: SelectChangeEvent) => {
		callback(event);
		dispatch(setPage(1));
	}

	return (
		<>
			<FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id={`is${label}`}>{label}</InputLabel>
        <Select
          labelId={`is${label}`}
          id={label}
          value={parametr}
          onChange={handleChange}
          label={label}
        >
					{children}
        </Select>
      </FormControl>
		</>
	)
}