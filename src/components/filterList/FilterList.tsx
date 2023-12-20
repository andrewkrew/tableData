import { Box } from "@mui/material"
import { SearchPanel } from "../ui/searchPanel"
import { SelectCompleted } from "../ui/selectCompleted"
import { SelectOrder } from "../ui/selectOrder"
import { SelectSort } from "../ui/selectSort"


export const FilterList = () => {
	return (
		<Box sx={{
				width: '50%',
				display: 'grid', 
				gridTemplateColumns: '1fr 1fr', 
				gridGap: '5px', 
				justifyItems: 'center',
				alignItems: 'center',
			}}>
			<SearchPanel/>
			<SelectCompleted/>
			<SelectSort/>
			<SelectOrder/>
		</Box>
	)
}