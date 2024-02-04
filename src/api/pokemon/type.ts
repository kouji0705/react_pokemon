import { Pokemon } from '@bgoff1/pokeapi-types';
import { UseQueryResult } from '@tanstack/react-query';

export interface PokemonListResponse {
  results: Array<{ name: string; url: string }>;
}

export interface UsePokemonsResult {
  listQuery: UseQueryResult<PokemonListResponse, Error>; // 一覧取得のクエリ結果
  detailsQueries: UseQueryResult<Pokemon, Error>[]; // 各ポケモンの詳細情報取得のクエリ結果の配列
}
