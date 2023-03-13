import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomInput() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ flex: 1 , fontSize: 13 }} 
        placeholder="Search Project"
        inputProps={{ 'aria-label': 'Search Project' }}
      />
      <IconButton type="button" sx={{ p: '10px' , fontSize : 13 }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}