import { useEffect, useState } from 'react'
import './App.css'
import { TableData } from './components/tableData/TableData'
import { useAppDispatch, useAppSelector } from './shared/hooks/useRedux'
import { fetchTodosThunk } from './redux';
import { SearchTodosParams } from './shared/api/types';
import { filterSelector, todosSelector } from './redux/selectors';
import { FilterList } from './components/filterList';

function App() {

  // const [page, setPage] = useState<number>(1);
  // const [searchValue, setSearchValue] = useState<string>('');
  // const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  // const [sortBy, setSortBy] = useState<'id' | 'title'>('id');
  // const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const dispatch = useAppDispatch();
  const {page, search, status, sortBy, order} = useAppSelector(filterSelector);
  const {todosData} = useAppSelector(todosSelector);

  useEffect(() => {
    dispatch(fetchTodosThunk(
      {
        page,
        // search: searchValue,
        // status: isCompleted,
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
    <pre>{JSON.stringify(todosData, null, 2)}</pre>
    </>
  )
}

export default App
