import * as React from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { useTranslation } from "react-i18next";
import "./Pokemon.css";

interface PokemonProps {
  pokeId: number;
  selectedPokemon: {
    url: string;
    name: string;
  };
}

interface CurrentPokemonContextType {
  getPokemonWeightKg: Function;
  getPokemonTypes: Function;
}

function Pokemon({ pokeId, selectedPokemon }: PokemonProps) {
  const [currentPokemon, setCurrentPokemon] = React.useState<object>({});
  let { getPokemonWeightKg, getPokemonTypes }: CurrentPokemonContextType =
    React.useContext<any>(PokemonContext);
  const { name, types, weight }: any = currentPokemon;

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);

    const fetchPokemon = async () => {
      const response = await fetch(selectedPokemon.url as string);
      const data = await response.json();

      setCurrentPokemon(data);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="poke-box">
      <div>
        <div className="img-box">
          <img
            className="pokemon-image"
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokeId + 1
            }.png`}
          />
        </div>
        <div className="type-box">
          <p>{t("poke_list.poke_card.type")}</p>
          <p className="pokemon-type">{types ? getPokemonTypes(types) : ""}</p>
        </div>
        <div className="weight-box">
          <p>{t("poke_list.poke_card.weight")}</p>
          <p className="pokemon-weight">{getPokemonWeightKg(weight)}kg</p>
        </div>
        <div className="name-box">
          <h4 className="pokemon-name">{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
