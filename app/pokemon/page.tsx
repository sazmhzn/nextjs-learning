import Link from "next/link";
import React from "react";

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
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const pokemons = await data.json();

  return (
    <div className="min-h-screen">
      <ul>
        {pokemons.results.map((pokemon: Pokemons) => (
          <div key={pokemon.name} className="mt-4 px-4 capitalize">
            <Link href={`/pokemon/${pokemon.name}`}> {pokemon.name}</Link>
          </div>
          //
        ))}
      </ul>
    </div>
  );
}
