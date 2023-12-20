import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { TodosData, UserList } from "../../shared/api/types";
import { fetchTodosThunk, fetchUsersThunk } from "./thunk";

interface TodosState {
	isLoading: boolean,
	todosData: TodosData,
	usersData: UserList[],
	error: string | undefined,
}

const initialState: TodosState = {
	isLoading: false,
	todosData: {
		data: [], 
		totalCount: ''
	} as TodosData,
	usersData: [],
	error: '',
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(fetchTodosThunk.pending.match, (state) => {
			state.isLoading = true;
		})

		builder.addMatcher(fetchTodosThunk.fulfilled.match, (state, action: AnyAction) => {
			state.isLoading = false;
			state.todosData = action.payload;
			state.error = '';
		})

		builder.addMatcher(fetchTodosThunk.rejected.match, (state, action: AnyAction) => {
      state.isLoading = false;
			state.error = action.payload;
      }
		);

		builder.addMatcher(fetchUsersThunk.pending.match, (state) => {
			state.isLoading = true;
		})

		builder.addMatcher(fetchUsersThunk.fulfilled.match, (state, action: AnyAction) => {
			state.usersData = action.payload;
		})

		builder.addMatcher(fetchUsersThunk.rejected.match, (state, action: AnyAction) => {
			state.isLoading = false;
			state.error = action.payload;
		})
	},
})