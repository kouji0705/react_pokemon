import React from 'react';
import { usePokemons } from '../../api/pokemon/api';
import { isNullish } from '../../common/common';
import { CardList } from './PokemonCardList';

export const PokemonComponent: React.FC = () => {
  const { listQuery, detailsQueries } = usePokemons(20, 0);

  if (isNullish(detailsQueries)) return <div>Loading...</div>;
  console.log('listQuery', listQuery);
  console.log('HIT8 detailsQueries', detailsQueries);
  // 一覧データのローディング中
  if (
    listQuery.isLoading ||
    isNullish(listQuery.data) ||
    isNullish(detailsQueries)
  ) {
    return <div>Loading pokemons...</div>;
  }

  // 一覧データ取得時のエラー
  if (listQuery.isError) {
    return <div>Error: {listQuery.error.message}</div>;
  }

  return (
    <div>
      <h2>Pokemon List</h2>
      <CardList detailsQueries={detailsQueries} />
    </div>
  );
};