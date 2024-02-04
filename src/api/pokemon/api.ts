// import { Pokemon } from '@bgoff1/pokeapi-types';

import { Pokemon } from '@bgoff1/pokeapi-types';
import { UseQueryResult, useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PokemonListResponse, UsePokemonsResult } from './type';

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

export const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> => {
  const response = await axios.get<PokemonListResponse>(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export async function getPokemonDetails(url: string): Promise<Pokemon> {
  const { data } = await axios.get(url);
  return data;
}

export const usePokemons = (
  limit: number,
  offset: number,
  searchId?: number
): UsePokemonsResult => {
  console.log('=======HIT8 ', limit, offset, searchId);
  const listQuery = useQuery<PokemonListResponse, Error>({
    queryKey: ['pokemonList', limit, offset, searchId],
    queryFn: () => getPokemons(limit, offset),
  });

  // useQueriesは常に呼び出されるが、listQuery.dataが存在する場合のみクエリが有効になる
  const detailsQueries = useQueries({
    queries:
      listQuery.data?.results.map((pokemon) => ({
        queryKey: ['pokemonDetails', pokemon.name],
        queryFn: () => getPokemonDetails(pokemon.url),
        enabled: !!listQuery.data, // listQuery.dataが存在する場合のみクエリを有効化
      })) ?? [],
  });

  return { listQuery, detailsQueries };
};
