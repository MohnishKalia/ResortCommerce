import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <Link to="/">
      </Link>
      <Footer/>
    </Router>
  );
}

export default App;
