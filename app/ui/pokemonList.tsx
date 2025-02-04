"use client";
import React, { use } from "react";

const PokemonList = ({ pokemons }) => {
  const allPokemons = use(pokemons);
  console.log(allPokemons);
  return <div> asdasd</div>;
};

export default PokemonList;
