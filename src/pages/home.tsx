import { PokemonComponent } from '../features/components/PokemonComponent';
import { SearchBar } from '../features/components/SearchBar';

export const Home = () => {
  return (
    <div>
      <h1>ポケモン表示</h1>
      <div>
        <SearchBar />
      </div>
      <PokemonComponent />
    </div>
  );
};
