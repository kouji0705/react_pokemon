import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(searchTerm);
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
