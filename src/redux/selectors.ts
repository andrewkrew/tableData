import { RootState } from "./store";

export const todosSelector = (state: RootState) => state.todos;
export const filterSelector = (state: RootState) => state.filter;