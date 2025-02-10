import React from "react";
import styles from "../Pokemon.module.sass";
import Image from "next/image";
import { Pokemon } from "../page";

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
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
  );
};
