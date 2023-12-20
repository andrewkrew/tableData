import { useEffect } from 'react'
import './App.css'
import { TableData } from './components/tableData/TableData'
import { useAppDispatch, useAppSelector } from './shared/hooks/useRedux'
import { fetchTodosThunk, fetchUsersThunk } from './redux';
import { SearchTodosParams } from './shared/api/types';
import { filterSelector } from './redux/selectors';
import { FilterList } from './components/filterList';
import { useDebounce } from './shared/hooks/useDebounce';
import { Typography } from '@mui/material';

function App() {

  const dispatch = useAppDispatch();
  const {page, search, status, sortBy, order} = useAppSelector(filterSelector);

  const fetchData = () => {
    dispatch(fetchTodosThunk(
      {
        page,
        search,
        status,
        sortBy,
        order,
      } as SearchTodosParams)); 
  }

  useDebounce(fetchData, 500, [search]);

	useEffect(() => {
		dispatch(fetchUsersThunk())
	}, [dispatch])

  useEffect(() => {
    fetchData();      
  }, [dispatch, page, status, sortBy, order])

  return (
    <div className='wrapper'>
			<Typography  
				variant="h2" 
				sx={{textTransform: 'uppercase', padding: 1}}>
				table data
			</Typography>
			<FilterList/>
			<TableData/>
    </div>
  )
}

export default App
