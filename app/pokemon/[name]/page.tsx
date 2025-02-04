import { Metadata } from "next";
import React from "react";

export interface Pokemon {
  height: number;
  id: number;
  isDefault: boolean;
  name: string;
  order: number;
  weight: number;
  sprites: Sprites;
}

export interface Sprites {
  front_default: string;
  back_default: string;
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  // fetch data
  const pokemon: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const sprite = pokemon.sprites.front_default || [];
  console.log(pokemon.sprites.front_default);

  return {
    title: pokemon.name,
    description: "Just a pokemon desc",
    openGraph: {
      title: pokemon.name,
      images: sprite,
    },
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );

  if (!response.ok) throw new Error("Failed to fetch the pokemon data.");

  const pokemon: Pokemon = await response.json();
  return (
    <div>
      Pokemon data
      <div>Name: {pokemon.name}</div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
    </div>
  );
}
