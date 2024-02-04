import React from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Card } from './Card';
import { Pokemon } from '@bgoff1/pokeapi-types';
import { Grid } from '@mui/material';

interface CardListProps {
  detailsQueries: UseQueryResult<Pokemon, Error>[];
}

export const CardList: React.FC<CardListProps> = ({ detailsQueries }) => {
  return (
    <Grid container spacing={2}>
      {detailsQueries.map((query, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          {query.isLoading || !query.data ? (
            <div>Loading...</div>
          ) : (
            <Card
              id={query.data.id}
              name={query.data.name}
              image={query.data.sprites.front_default ?? ''}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
