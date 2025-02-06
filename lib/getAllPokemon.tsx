import { notFound } from "next/navigation";

export default async function getAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500", {
    cache: "force-cache",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
