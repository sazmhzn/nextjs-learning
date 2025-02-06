"use server";
import React, { Suspense } from "react";
import { PokemonList } from "./components/PokemonList";
import getAllPokemon from "@/lib/getAllPokemon";

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
  // const pokemons = await data.json();
  console.log(pokemons);

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Gettign you pokemons</div>}>
        <PokemonList pokemons={(await pokemons).results} />
      </Suspense>
    </div>
  );
}
