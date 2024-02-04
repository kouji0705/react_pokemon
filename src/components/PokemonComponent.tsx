import React from 'react';
import { usePokemons } from '../api/pokemon/api';
import { isNullish } from '../common/common';

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
      <ul>
        {detailsQueries.map((query) => {
          if (query.isLoading || isNullish(query.data)) {
            return <div>Loading...</div>;
          }
          return (
            <li key={query.data?.id}>
              <div>{query.data?.id}</div>
              <div>{query.data?.name}</div>
              {/* <img src={query.data.}></img> */}
              <div>
                <img
                  // src={query.data.sprites.front_default}
                  src={query.data.sprites.front_default || ''}
                  alt={query.data.name}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
