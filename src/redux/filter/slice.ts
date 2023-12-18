import { createSlice } from "@reduxjs/toolkit";
import { SearchTodosParams } from "../../shared/api/types";

const initialState: SearchTodosParams = {
	page: 1,
	search: '',
	status: null,
	sortBy: 'id',
	order: 'asc',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setPage(state, action) {
			state.page = action.payload;
		},
		setSearchValue(state, action) {
			state.search = action.payload;
		},
		setStatus(state, action) {
			state.status = action.payload;
		},
		setSort(state, action) {
			state.sortBy = action.payload.sortBy;
			state.order = action.payload.order;
		},
	}
})
