import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/useRedux';
import { filterSelector, todosSelector } from '../../redux/selectors';
import { UserList } from '../../shared/api/types';
import { ChangeEvent } from 'react';
import { setPage } from '../../redux';
import { Preloader } from '../preloader';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const findUsernameById = (id: number, userList: UserList[]): string => {
	const result = userList.find((item) => item.id === id);		
	return result ? result.name : `UserID: ${id}`;
}

export const TableData = () => {
  
	const {isLoading, todosData, usersData, error} = useAppSelector(todosSelector);
  const {page} = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value))
  }

  const calcPagesCount = (pages: string): number => {
    return Math.ceil(+pages / 15)
  }

  if (error) return <p>{error}</p>

	return (
    <> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">User</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Completed</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {/* { isLoading 
          ? <Preloader/>
          : <>
              {todosData.data.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{findUsernameById(item.userId, usersData)}</StyledTableCell>
                  <StyledTableCell align="center">{item.title}</StyledTableCell>
                  <StyledTableCell align="center">{item.completed.toString()}</StyledTableCell>
                </StyledTableRow>
              ))}
            </>
          } */}
               {todosData.data.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{findUsernameById(item.userId, usersData)}</StyledTableCell>
                  <StyledTableCell align="center">{item.title}</StyledTableCell>
                  <StyledTableCell align="center">{item.completed.toString()}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{padding: 1}}>
        <Pagination count={calcPagesCount(todosData.totalCount)} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}
