import { ImagenPokemon } from '../DTO/imagen';
import { TipoPokemon } from '../DTO/tipo';

export class PokemonListadDTO {
  id!: number;
  name!: string;
  weight!: number;
  height!: number;
  sprites!: ImagenPokemon;
  types!: TipoPokemon[];
}
