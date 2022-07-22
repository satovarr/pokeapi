import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom"
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";

test("render selected Pokemon", async () => {
  render(<App/>)

  await screen.findByText("Charmander");

  fireEvent(
    screen.getByText("Charmander"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(await screen.findByText("mega-punch")).toBeVisible();
});

test("search pokemon and render filtered results", async () => { 
  render(<App />);
  await screen.findByText("Charmander");

  fireEvent.change(screen.getByPlaceholderText("Buscar"),
    {target: {value: "ju"}}
  );
  
  expect(await screen.findByText("Jumpluff")).toBeVisible();
});
