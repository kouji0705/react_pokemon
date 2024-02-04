import React from 'react';
import { usePokemon, usePokemons } from '../api/pokemon/api';
import { isNullish } from '../common/common';

const PokemonComponent: React.FC = () => {
  const { listQuery, detailsQueries } = usePokemons(20, 0);

  if (isNullish(detailsQueries)) return <div>Loading...</div>;
  console.log('listQuery', listQuery);
  console.log('HIT8 detailsQueries', detailsQueries);
  console.log('HIT9 detailsQueries', detailsQueries[0].data);
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
      <ul>
        {listQuery.data.results.map((pokemon, index) => (
          <li key={pokemon.name}>
            {pokemon.name}
            {/* 詳細データのローディング状態やエラーをハンドル */}
            {detailsQueries[index]?.isLoading ? (
              <span> Loading details...</span>
            ) : detailsQueries[index]?.isError ? (
              <span> Error loading details</span>
            ) : (
              <div>
                {/* ここに詳細情報を表示 */}
                ddd
                {/* <p>Details: {detailsQueries[index] ?? ''}</p> */}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonComponent;
