import "./selectedPokemonCard.css";
import blackIcon from "./BLANK_ICON.png";

export default function SelectedPokemonCard({ selectedPokemon, capitalize }) {

  if (selectedPokemon) //renders selected Pokemon when selected (setSelectedPokemon on PokemonCard component)
    return (
      <div className="app_rightBox rightBox">
        <img
          src={selectedPokemon.sprites.other["official-artwork"].front_default}
          alt=""
          className="selectedPokemonCard__image"
        />
        <h3 className="selectedPokemonCard__text"># {selectedPokemon.id}</h3>
        <h3 className="selectedPokemonCard__text">
          {capitalize(selectedPokemon.name)}
        </h3>
        <div className="selectedPokemonCard__box">
          <div className="selectedPokemonCard__box__container">
            <h3 className="selectedPokemonCard__text text--title">Types</h3>
            <p className="selectedPokemonCard__text text--p">
              {selectedPokemon.types.map((pokemonType, index) => (
                <span key={index}>{pokemonType.type.name} </span>
              ))}
            </p>
          </div>
          <div className="selectedPokemonCard__box__container">
            <h3 className="selectedPokemonCard__text text--title">Peso</h3>
            <p className="selectedPokemonCard__text text--p">
              {selectedPokemon.weight}
            </p>
          </div>
          <div>
            <h3 className="selectedPokemonCard__text text--title">Sprites</h3>
            <div className="selectedPokemonCard__box__container container--sprites">
              {Object.values(selectedPokemon.sprites)
                .slice(4, 8)
                .map((sprite, index) => {
                  if (sprite) return (
                    <img
                      src={sprite}
                      alt=""
                      key={index}
                      className="img--sprite"
                    ></img>
                  )
                  return (
                    <img
                      src={blackIcon}
                      alt=""
                      key={index}
                      className="img--sprite"
                    />
                  );
                })}
            </div>
          </div>
          <div>
            <h3 className="selectedPokemonCard__text text--title">
              Movimientos
            </h3>
            <p className="">
              {Object.values(selectedPokemon.moves)
                .slice(0, 5)
                .map((move, index) => {
                  return <span key={index}>{move.move.name} </span>;
                })}
            </p>
          </div>
        </div>
      </div>
    );

  return <div></div>;
}
