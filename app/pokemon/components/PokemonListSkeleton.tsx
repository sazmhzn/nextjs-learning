import React from "react";

const PokemonListSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <div className="h-10 bg-gray-400 w-full">Pokemon name</div>
      <div className="h-10 bg-gray-400 w-full">Pokemon name</div>
      <div className="h-10 bg-gray-400 w-full">Pokemon name</div>
      <div className="h-10 bg-gray-400 w-full">Pokemon name</div>
      <div className="h-10 bg-gray-400 w-full">Pokemon name</div>
    </div>
  );
};

export default PokemonListSkeleton;
