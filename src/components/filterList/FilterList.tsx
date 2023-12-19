import { SearchPanel } from "../ui/searchPanel"
import { SelectCompleted } from "../ui/selectCompleted"
import { SelectOrder } from "../ui/selectOrder"
import { SelectSort } from "../ui/selectSort"


export const FilterList = () => {
	return (
		<>
			<SearchPanel/>
			<SelectCompleted/>
			<SelectSort/>
			<SelectOrder/>
		</>
	)
}