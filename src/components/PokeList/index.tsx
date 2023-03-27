import * as React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import PokeModal from '../PokeModal/index';
import Pokemon from '../Pokemon/index';
import { PokemonContext } from '../../contexts/pokemonContext';
import './PokeList.css';

interface CurrentPokemonContextType {
  isModalOpen: boolean,
  openModal: Function,
  getPokemonWeightKg: Function,
  selectedPokemon: SelectedPokemon,
  selectPokemon: Function,
  getSpeciesData: Function
}

interface SelectedPokemon {
  id: number
}

interface poke {
  url: string,
  name: string
}

function PokeList() {

  const [ pokemonList, setPokemonList ] = React.useState<Array<any>>([]);
  let { openModal, getSpeciesData, selectPokemon, selectedPokemon }: CurrentPokemonContextType = React.useContext(PokemonContext);

  React.useEffect(() => {
    const fetchAllPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const results = data.results.slice(0, data.results.length).map((newArray : Object) => newArray);

      setPokemonList(results);
    }

    fetchAllPokemon();

  }, [])


  return (
    <Container >
      <div>
      <h1 className='page-main-title'>PokeList</h1>
      <p className='page-main-desc'>Click on a Pokemon to discover more..</p>
      </div>
      <Row>
        <PokeModal/>
        <div className='listOfPokemon'>

          {pokemonList.map((poke: poke, id: any) => {
            return (
              <div onClick={() => {
                openModal();
                selectPokemon(poke);
                getSpeciesData(selectedPokemon.id);
              }} id={id}>
                <Pokemon key={id} pokeId={id} selectedPokemon={poke} />
              </div>
            )
          })}
          
        </div>
      </Row>
    </Container>
  )
}

export default PokeList