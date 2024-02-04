import React from 'react';
import { usePokemon, usePokemons } from '../api/pokemon/api';
import { isNullish } from '../common/common';

const PokemonComponent: React.FC = () => {
  const { data, error, isLoading } = usePokemon('pikachu');
  const { listQuery, detailsQueries } = usePokemons(20, 0);

  // 一覧データのローディング中
  if (listQuery.isLoading) {
    return <div>Loading pokemons...</div>;
  }

  // 一覧データ取得時のエラー
  if (listQuery.isError) {
    return <div>Error: {listQuery.error.message}</div>;
  }
  if (isLoading || isNullish(data)) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log('listQuery', listQuery);
  console.log('HIT8 detailsQueries', detailsQueries);
  console.log('HIT9 detailsQueries', detailsQueries[0].data);
  return (
    <div>
      <h2>{data.name}</h2>
      <p>身長: {data.height}</p>
      <p>体重: {data.weight}</p>
      {data.sprites.front_default ? (
        <img src={data.sprites.front_default} alt={data.name} />
      ) : (
        <div>画像がありません</div>
      )}
    </div>
  );
};

export default PokemonComponent;
