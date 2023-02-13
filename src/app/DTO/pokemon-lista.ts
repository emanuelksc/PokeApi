import { ImagenPokemon } from '../DTO/imagen';

export class PokemonListadDTO {
  id!: number;
  name!: string;
  weight!: number;
  height!: number;
  sprites!: ImagenPokemon;
}
