import getAllPokemon from "@/lib/getAllPokemon";
import { Suspense } from "react";
import { PokemonList } from "./_components/PokemonList";

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: number;
  results: Pokemons[];
}

export interface Pokemons {
  name: string;
  url: string;
}

export default async function Pokemon() {
  const pokemons: Promise<PokemonsResponse> = getAllPokemon();

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Gettign you pokemonsasd</div>}>
        <PokemonList pokemons={(await pokemons).results} />
      </Suspense>
    </div>
  );
}
