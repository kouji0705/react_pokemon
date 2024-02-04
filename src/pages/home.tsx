import { Button, TextField } from '@mui/material';
import { PokemonComponent } from '../features/components/PokemonComponent';
import { useState } from 'react';
import { SearchBar } from '../features/components/SearchBar';

export const Home = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('検索ワード:', searchTerm);
    // 検索処理をここに実装（例: APIからポケモンデータをフェッチするなど）
  };
  return (
    <div>
      <h1>ポケモン表示</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <PokemonComponent />
    </div>
  );
};
