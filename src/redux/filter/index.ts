import { filterSlice } from './slice'
export const {setPage, setSearchValue, setStatus, setSort, setOrder} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;