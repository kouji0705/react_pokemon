import React from 'react';
import { usePokemon } from '../api/pokemon/api';
import { isNullish } from '../common/common';

const PokemonComponent: React.FC = () => {
  const { data, error, isLoading } = usePokemon('pikachu');

  if (isLoading || isNullish(data)) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
