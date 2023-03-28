import * as React from 'react'

const PokemonContext = React.createContext<any>({});

interface poke {
  url: string
}


class PokemonProvider extends React.Component<any, any>{

  state = {
    selectedPokemon: {},
    isModalOpen: false,
    species: {}
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
   
  }

  selectPokemon = async(poke: poke) => {
    try {
      const pokeResponse = await fetch(poke.url);
      const data = await pokeResponse.json();
      
      this.setState({ selectedPokemon: data })
    } catch (e) {
      console.log("Error message: ", e)
    }
  }

  getPokemonWeightKg = (weight: number) => {
    return (weight/10).toFixed(1).toString();
  }

  getPokemonHeight = (height: number) => {
    return (height*10).toFixed(1).toString();
  }

  getSpeciesData = async (pokeId: number) => {
    try {
      const getResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`);
      const data = await getResponse.json();
      this.setState({ species: data })
    } catch (e) {
      console.log("Error message: ", e)
    }
  }
  
  getPokemonTypes = (pokeTypes: Array<any>) => {
    let result = "";

    if (pokeTypes.length === 1) {
      result = pokeTypes[0].type.name;
    } else if (pokeTypes.length === 2) {
      result = pokeTypes[0].type.name + ', ' + pokeTypes[1].type.name;
    }
    
    return result;
  }

  openModal =  async () => {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal = async () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <PokemonContext.Provider value={{ 
        ...this.state,
        closeModal: this.closeModal,
        openModal: this.openModal,
        selectPokemon: this.selectPokemon,
        getSpeciesData: this.getSpeciesData,
        getPokemonWeightKg: this.getPokemonWeightKg,
        getPokemonHeight: this.getPokemonHeight,
        getPokemonTypes: this.getPokemonTypes
        }}>
          {this.props.children}
      </PokemonContext.Provider>
    )
  }
}

const PokemonConsumer = PokemonContext.Consumer;
export { PokemonConsumer, PokemonContext };

export default PokemonProvider;