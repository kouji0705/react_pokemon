// import { Pokemon } from '@bgoff1/pokeapi-types';

import { Pokemon } from '@bgoff1/pokeapi-types';
import axios from 'axios';

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return response.data;
};
