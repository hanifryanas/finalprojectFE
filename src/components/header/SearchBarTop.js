import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  TextField,
} from '@mui/material';

const SearchBarTop = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', height: "50px", width: "100%", marginTop: "20px" }} >
        <TextField id="outlined-basic" label={<SearchIcon />} fullWidth variant="outlined" />
      </Box>
    </div>
  )
}

export default SearchBarTop