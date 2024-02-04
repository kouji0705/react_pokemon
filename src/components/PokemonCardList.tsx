import React from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { isNullish } from '../common/common';
import { Card } from './Card';
import { Pokemon } from '@bgoff1/pokeapi-types';

interface CardListProps {
  detailsQueries: UseQueryResult<Pokemon, Error>[];
}

export const CardList: React.FC<CardListProps> = ({ detailsQueries }) => {
  return (
    <ul className="card-list">
      {detailsQueries.map((query, index) => {
        if (query.isLoading || isNullish(query.data)) {
          return <div key={index}>Loading...</div>;
        }
        return (
          <li key={query.data.id}>
            <Card
              id={query.data.id}
              name={query.data.name}
              image={query.data.sprites.front_default || ''}
            />
          </li>
        );
      })}
    </ul>
  );
};
