import { useEffect } from 'react'
import './App.css'
import { TableData } from './components/tableData/TableData'
import { useAppDispatch, useAppSelector } from './shared/hooks/useRedux'
import { fetchTodosThunk, fetchUsersThunk } from './redux';
import { SearchTodosParams } from './shared/api/types';
import { filterSelector } from './redux/selectors';
import { FilterList } from './components/filterList';

function App() {

  const dispatch = useAppDispatch();
  const {page, search, status, sortBy, order} = useAppSelector(filterSelector);

	useEffect(() => {
		dispatch(fetchUsersThunk())
	}, [dispatch])

  useEffect(() => {
    dispatch(fetchTodosThunk(
      {
        page,
        search,
        status,
        sortBy,
        order,
      } as SearchTodosParams));
  }, [dispatch, page, search, status, sortBy, order])

  return (
    <>
			<h1>TABLE DATA</h1>
			<FilterList/>
			<TableData/>
    </>
  )
}

export default App
