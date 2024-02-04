import { Pokemon } from '@bgoff1/pokeapi-types';
import { UseQueryResult } from '@tanstack/react-query';

export interface CardListProps {
  detailsQueries: UseQueryResult<Pokemon, Error>[];
}
