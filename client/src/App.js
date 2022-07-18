import './App.css';

import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import DetailCard from './components/detailCard/detailCard';
import PokemonStack from './components/pokemonStack/pokemonStack.jsx';
import Landing from './components/landing/landing';
import NavBar from './components/navBar/navBar';
import PokemonCreate from './components/createForm/pokemonCreate';

function App() {
  
  const location = useLocation();

  return (
  <React.Fragment>

    {location.pathname !== '/' ? <NavBar /> : null}
    
    <Switch>
      <Route path='/pokemon/:id' component={DetailCard} />
      <Route exact path='/pokemon' component={PokemonStack} />
      <Route path='/catch' component={PokemonCreate} />
      <Route exact path='' component={Landing} />
    </Switch>
    
  </React.Fragment>
  );
}

export default App;
