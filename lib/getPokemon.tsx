import { notFound } from "next/navigation";

export default async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}
