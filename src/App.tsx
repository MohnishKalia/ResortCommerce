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

import CartContext from './context/CartContext'
import Resorts from './Items'
import ShopReducer from './context/Reducers';

const App = () => {
  const [cartState, dispatch] = React.useReducer(ShopReducer, { products: Resorts, cart: [], addProductToCart: () => { }, removeProductFromCart: () => { } });
  return (
    <CartContext.Provider value={{
      products: Resorts,
      cart: cartState.cart,
      addProductToCart: product => dispatch({ type: "ADD_PRODUCT", product }),
      removeProductFromCart: productId => dispatch({ type: "REMOVE_PRODUCT", productId })
    }}>
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
