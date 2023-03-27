import * as React from 'react';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import MainNavigation from './components/MainNavigation/MainNavigation';
import HomePage from './components/HomePage/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeList from './components/PokeList/index';
import PokemonProvider from './contexts/pokemonContext';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <Router>
            <MainNavigation />
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path='/list' element={<PokeList/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </PokemonProvider>
  );
}

export default App;
