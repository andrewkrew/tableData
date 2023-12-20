import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectElement = (
	{label, handleChange, parametr, children}
	: {label: string, handleChange: (event: SelectChangeEvent) => void, parametr: string, children: React.ReactNode}
) => {
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