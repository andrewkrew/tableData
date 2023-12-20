import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const Preloader = () => {
  return (
		<Box sx={{ width: '100%', height: 10 }}>
      <LinearProgress sx={{
          color: () => '#ff9800'
        }}/>
    </Box>
  );
}