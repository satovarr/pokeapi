import "./pokemonCard.css";
import defaultPokemonImage from "./default_pokemon.png";
import { useEffect, useState } from "react";

export default function PokemonCard({ urls, index, setSelectedPokemon, capitalize }) {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    // get pokemon information to pokemonData
    const fetchPage = () => {
      fetch(urls[index])
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data);
          setLoading(false);
        })
        .catch((e) => console.log("loading"));
    };

    setLoading(true);
    if (urls && urls.length > 0) { // avoids fetching before having the reference
      fetchPage();
    }
  }, [urls, index]);

  const getPokemonImage = () => {
    // searchs for main image if exists
    return pokemonData.sprites.other["official-artwork"].front_default
      ? pokemonData.sprites.other["official-artwork"].front_default
      : pokemonData.sprites.other["home"].front_default ? pokemonData.sprites.other["home"].front_default : defaultPokemonImage;
      
  }

  const handleSelectPokemon = () => { // sets SelectedPokemon and render on selectedPokemon component
    setSelectedPokemon({ ...pokemonData });
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <div onClick={handleSelectPokemon} className={"pokemonCard card--" + index.toString()}>
      <img
        className="pokemonCard__image"
        src={getPokemonImage()}
        alt=""
      />
      <p className="pokemonCard__text"># {pokemonData.id}</p>
      <p className="pokemonCard__text">{capitalize(pokemonData.name)}</p>
    </div>
  );
}
