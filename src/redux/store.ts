import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filterReducer, todosReducer } from '.';

const rootStore = combineReducers({
	todos: todosReducer,
	filter: filterReducer,
})

export const store = configureStore({
	reducer: rootStore,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;