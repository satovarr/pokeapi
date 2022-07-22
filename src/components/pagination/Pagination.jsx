import "./pagination.css";
import searchIcon from "../files/searchIcon.png";
import { useState, useEffect } from "react";
import Page from "../page/Page";
import SelectedPokemonCard from "../selectedPokemonCard/SelectedPokemonCard";

const Pagination = ({ currentPage, setCurrentPage, pokemonRaw }) => {
  const [search, setSearch] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    if (search.length > 0) {
      // filter Pokemon list by search string
      const filterPokemon = (search) => {
        const indices = Object.keys(pokemonRaw).filter((value) =>
          pokemonRaw[value].name.includes(search)
        );
        return indices.map((index) => pokemonRaw[index]);
      };
      setPokemonSearch(filterPokemon(search));
    } else {
      setPokemonSearch(pokemonRaw);
    }
    setCurrentPage(1)
  }, [search, pokemonRaw, setCurrentPage]);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
        <div className="app__searchBar searchBar">
          <img className="pagination__searchBar__image" src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            className="pagination__searchBar__input"
            onChange={handleInputChange}
          />
        </div>
        <Page
          currentPage={currentPage}
          pokemonSearch={pokemonSearch}
          setSelectedPokemon={setSelectedPokemon}
          capitalize={capitalize}
        />
      
        <SelectedPokemonCard selectedPokemon={selectedPokemon} capitalize={ capitalize} />
      
    </>
  );
};

export default Pagination;
