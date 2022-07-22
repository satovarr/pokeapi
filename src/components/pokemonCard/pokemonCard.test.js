import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

test("fetch and displays cards", async () => {
  const data = {
    urls: [
      "https://pokeapi.co/api/v2/pokemon/1",
      "https://pokeapi.co/api/v2/pokemon/2",
      "https://pokeapi.co/api/v2/pokemon/3",
      "https://pokeapi.co/api/v2/pokemon/4",
    ],
    index: 0,
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  };

  render(
    <PokemonCard
      urls={data.urls}
      index={data.index}
      capitalize={data.capitalize}
      setSelectedPokemon={() => {}}
    />
  );

  expect(await screen.findByText("Bulbasaur")).toBeVisible();

  //const element = screen.getByText("a");
  //expect(element).toBeInTheDocument();
});
