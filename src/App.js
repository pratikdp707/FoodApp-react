import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Burger from './Components/Burger';
import Cart from "./Components/Cart";
import CartPage from './Components/CartPage';
import Main from './Components/Main';
import NavBar from "./Components/NavBar";
import Pizza from './Components/Pizza';
import MenuState from './Contexts/MenuState';

function App() {

  return (
    <div>
      <Router>
        <MenuState>
          <NavBar />
          <Switch>
            <Route exact path="/cart"><CartPage /></Route>
            <Route exact path="/"><Main /></Route>
            <Route exact path="/home"><Main /></Route>
            <Route exact path="/pizza"><Pizza /></Route>
            <Route exact path="/burger"><Burger /></Route>
          </Switch>
        </MenuState>
      </Router>
    </div>
  );
}

export default App;
