import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./Pokemon.module.sass";
import getPokemon from "@/lib/getPokemon";
import { PokemonCard } from "./components/pokemonCard";

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
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);

  if (!response.ok) {
    return {
      title: "No data",
      description: "No data found",
    };
  }

  const pokemon: Pokemon = await response?.json();

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
  const pokemon: Pokemon = await getPokemon(slug);

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading pokemon....</div>}>
        <PokemonCard pokemon={pokemon} />
      </Suspense>
    </div>
  );
}
