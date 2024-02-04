// import { Pokemon } from '@bgoff1/pokeapi-types';

import { Pokemon } from '@bgoff1/pokeapi-types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return response.data;
};

// ポケモンデータを取得するカスタムフック
export const usePokemon = (name: string): UseQueryResult<Pokemon, Error> => {
  return useQuery<Pokemon, Error>({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
  });
};
