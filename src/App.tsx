import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Details from './components/Details'
import Checkout from './components/Checkout'

import CartContext from './CartContext'
import Resorts from './Items'

const App = () => {
  const cartHook = React.useState(Resorts);
  return (
    <CartContext.Provider value={cartHook}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
