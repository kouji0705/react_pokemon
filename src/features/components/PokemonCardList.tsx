import React from 'react';
import { Card } from './Card';
import { Grid } from '@mui/material';
import { CardListProps } from '../types/cardList';

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
