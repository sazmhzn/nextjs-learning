import Image from "next/image";
import { notFound } from "next/navigation";
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  // fetch data
  const pokemon: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const sprite = pokemon.sprites.front_default;

  return {
    title: pokemon.name,
    description: "Just a pokemon desc",
    openGraph: {
      title: pokemon.name,
      images: [sprite],
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  // if (!response.ok) throw new Error("Failed to fetch the pokemon data.");
  const pokemon: Pokemon = await response.json();
  if (!pokemon) {
    notFound();
  }

  console.log(pokemon);
  return (
    <div className="min-h-svh m-12">
      Pokemon data: {pokemon.order}
      <Image
        alt={`${pokemon.name} image`}
        src={pokemon.sprites.front_default}
        width={100}
        height={100}
      />
      <div>
        Name: <strong className="capitalize">{pokemon.name}</strong>
      </div>
      <div>
        Height: <strong>{pokemon.height}</strong>
      </div>
      <div>
        Weight: <strong>{pokemon.weight}</strong>
      </div>
    </div>
  );
}
