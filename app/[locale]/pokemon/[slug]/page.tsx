import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./Pokemon.module.sass";
import getPokemon from "@/lib/getPokemon";

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
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <span className={styles.badge}>
              #{String(pokemon.order).padStart(3, "0")}
            </span>
          </div>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                alt={`${pokemon.name} image`}
                src={pokemon.sprites.front_default}
                width={150}
                height={150}
                className={styles.image}
              />
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.name}>{pokemon.name}</div>

              <div className={styles.statRow}>
                <span className={styles.statLabel}>Height</span>
                <strong className={styles.statValue}>
                  {(pokemon.height / 10).toFixed(1)}m
                </strong>
              </div>

              <div className={styles.statRow}>
                <span className={styles.statLabel}>Weight</span>
                <strong className={styles.statValue}>
                  {(pokemon.weight / 10).toFixed(1)}kg
                </strong>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
