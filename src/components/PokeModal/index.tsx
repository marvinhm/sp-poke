import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { PokemonContext } from '../../contexts/pokemonContext';
import './PokeModal.css';

interface Species {
  habitat: {
    name: string
  }
}

interface sprites {
  other: {
    dream_world: {
      front_default: string
    }
  }
}

interface SelectedPokemon {
  id: number,
  sprites: sprites,
  name: string,
  height: number,
  moves: Array<any>,
  types: Array<any>,
  weight: number
}

interface CurrentPokemonContextType {
  isModalOpen: boolean,
  closeModal: Function,
  getPokemonWeightKg: Function,
  getPokemonHeight: Function,
  selectedPokemon: SelectedPokemon
  species: Species,
  getPokemonTypes: Function
}

function PokeModal() {
  let { isModalOpen, closeModal, getPokemonWeightKg, getPokemonHeight, selectedPokemon, species, getPokemonTypes }: CurrentPokemonContextType = React.useContext<any>(PokemonContext);

  const { id ,sprites, name, height, types, moves, weight } : SelectedPokemon = selectedPokemon;

  const { habitat }: Species = species;

  const getRandomNumber = (length: number) => {
    const number = Math.floor(Math.random() * length);
    return number;
  }

  const getMove = (moves: Array<any>) => {
    return moves[getRandomNumber(moves.length)].move.name;
  } 

  return (
    <>
      <Modal show={isModalOpen} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
          <div className='modal-id'>
            <p className="modal-text">Pokemon ID: </p>
            <p className="modal-text lightgrayText">{id}</p>
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Col>
          <div className='modal-image'>
            <img alt={name} src={sprites ? sprites.other.dream_world.front_default : ''} />
          </div>
          <div className='modalbox modal-name'>
            <p className="modal-text">Name: </p>
            <p className="modal-text lightgrayText">{name}</p>
          </div>
          <div className='modalbox modal-height'>
            <p className="modal-text">Height: </p>
            <p className="modal-text lightgrayText">{getPokemonHeight(height)}cm</p>
          </div>
          <div className='modalbox modal-weight'>
            <p className="modal-text">Weight: </p>
            <p className="modal-text lightgrayText">{getPokemonWeightKg(weight)}kg</p>
          </div>
          <div className='modalbox modal-weight'>
            <p className="modal-text">Types: </p>
            <p className="modal-text lightgrayText">{types ? getPokemonTypes(types) : ""}</p>
          </div>
          <div className='modalbox modal-move'>
            <p className="modal-text">Habitat: </p>
            <p className='modal-text lightgrayText'>
              {habitat ? habitat.name : 'Not Found'}</p>
          </div>
          <div className='modalbox modal-move'>
            <p className="modal-text">No. of Moves: </p>
            <p className='modal-text lightgrayText'>{moves ? moves.length : ''}</p>
          </div>
          <div className='modalbox modal-move'>
            <p className="modal-text">Random Move: </p>
            <p className='modal-text lightgrayText'>{moves ? getMove(moves) : ''}</p>
          </div>
          </Col>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PokeModal;