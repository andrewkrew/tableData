import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { TodosList } from "../../shared/api/types";
import { fetchTodosThunk } from "./thunk";

interface TodosState {
	isLoading: boolean,
	todosData: TodosList[],
	error: string | undefined,
}

const initialState: TodosState = {
	isLoading: false,
	todosData: [],
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
	},
})