import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import DetailCard from './components/detailCard/detailCard';
import PokemonStack from './components/pokemonStack/pokemonStack.jsx';

function App() {
  return (
  <React.Fragment>
    {/* <Route path='' component={Landing} /> */}
    <Route path='/pokemon/:id' component={DetailCard} />
    <Route exact path='/pokemon' component={PokemonStack} />
    {/* <Route path='/create' component={PokemonCreate} /> */}
  </React.Fragment>
  );
}

export default App;
