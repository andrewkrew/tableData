import { createAsyncThunk } from "@reduxjs/toolkit";
import Todos from "../../shared/api/todos";
import { SearchTodosParams } from "../../shared/api/types";

export const fetchTodosThunk = createAsyncThunk(
	'todos/fetchTodos',
	async (params: SearchTodosParams, { rejectWithValue }) => {
		try {
			const data = await (new Todos()).getTodos(params);
			return data;
		}
		catch(error: unknown) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
      return rejectWithValue('Server error, try again!');
		}
	}
)