import React, { Suspense } from "react";
import { PokemonList } from "./components/PokemonList";
import PokemonListSkeleton from "./components/PokemonListSkeleton";
import { cookies } from "next/headers";

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
  cookies();
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500", {
    next: { revalidate: 30 },
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
