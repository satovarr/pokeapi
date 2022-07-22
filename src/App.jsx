import "./App.css";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination/Pagination";
import SelectPage from "./components/selectPage/SelectPage";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonRaw, setPokemonRaw] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get the full pokemon list
    const fetchPokemon = async () => {
      setLoading(true);
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000"
      );
      const data = await response.json();
      setPokemonRaw(data.results);
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="App">
      <h1 className="app__title title">Listado de Pokemon</h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pokemonRaw={pokemonRaw}
        className="app__pagination"
      />
      <SelectPage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="app__selectPage"
      />
    </div>
  );
}

export default App;
