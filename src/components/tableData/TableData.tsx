import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
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
import { Box, Typography } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './styles';

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

  if (error) return <Typography align='center'>{error}</Typography>
	if (!todosData.data.length) {
		return (
			<>
				<Typography align='center'>{'Sorry, nothing found :('}</Typography>
				{isLoading ? <Preloader/> : <Box sx={{height: 10}}></Box>}
			</>
		)
	} 

	return (
    <> 
			{isLoading ? <Preloader/> : <Box sx={{height: 10}}></Box>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} size='small' aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">User</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Completed</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
