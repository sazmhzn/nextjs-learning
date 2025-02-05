import React from "react";
import { Pokemons } from "../page";
import Link from "next/link";

export const PokemonList: React.FC<{ pokemons: Pokemons[] }> = ({
  pokemons,
}) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="mt-4 px-4 capitalize">
          <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
};
