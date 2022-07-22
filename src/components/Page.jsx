import { useEffect, useState } from "react";
import "./page.css";
import PokemonCard from "./PokemonCard";

export default function Page({ currentPage, pokemonSearch, setSelectedPokemon, capitalize }) {
  const [urls, setUrls] = useState([]);
  
  useEffect(() => {
    // push current shown Pokemon to urls prop
    const currentPokemon = () => {
      const tempUrls = [];
      for (let i = 4; i > 0; i--) {
        tempUrls.push(pokemonSearch[currentPage * 4 - i]?.url)
      }
      setUrls(tempUrls);
    }

    currentPokemon();
  }, [pokemonSearch, currentPage]);
  
  //inherit urls and index to each pokemon card
  return (
    <div className="app_leftBox leftBox">
      <PokemonCard
        urls={urls}
        index={0}
        setSelectedPokemon={setSelectedPokemon}
        capitalize = {capitalize}
      />
      <PokemonCard
        urls={urls}
        index={1}
        setSelectedPokemon={setSelectedPokemon}
        capitalize={capitalize}
      />
      <PokemonCard
        urls={urls}
        index={2}
        setSelectedPokemon={setSelectedPokemon}
        capitalize={capitalize}
      />
      <PokemonCard
        urls={urls}
        index={3}
        setSelectedPokemon={setSelectedPokemon}
        capitalize={capitalize}
      />
    </div>
  );
}
