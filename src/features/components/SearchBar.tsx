import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`?search_id=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="ポケモン検索"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        検索
      </Button>
    </div>
  );
};
