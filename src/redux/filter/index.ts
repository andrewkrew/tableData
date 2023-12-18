import { filterSlice } from './slice'
export const {setPage, setSearchValue, setStatus, setSort} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;