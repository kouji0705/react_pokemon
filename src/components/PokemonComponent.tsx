import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '@bgoff1/pokeapi-types';

const PokemonComponent: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get<Pokemon>(
        'https://pokeapi.co/api/v2/pokemon/pikachu'
      );
      setPokemon(response.data);
    };

    fetchPokemon();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>身長: {pokemon.height}</p>
      <p>体重: {pokemon.weight}</p>
      {pokemon.sprites.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <div>画像がありません</div>
      )}
    </div>
  );
};

export default PokemonComponent;
