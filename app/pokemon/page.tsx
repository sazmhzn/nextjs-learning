import React, { Suspense } from "react";
import { PokemonList } from "./components/PokemonList";
import PokemonListSkeleton from "./components/PokemonListSkeleton";

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
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500", {
    next: { revalidate: 60 },
  });
  const pokemons = await data.json();

  return (
    <div className="min-h-screen">
      <Suspense fallback={<PokemonListSkeleton />}>
        <PokemonList pokemons={pokemons.results} />
      </Suspense>
    </div>
  );
}
