import React from 'react';
import logo from './logo.svg';
import './App.css';

import { countriesList as CountriesList } from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App () {

  return (
    <div className="App">
    <div className="container">


      <div><CountriesList></CountriesList></div>
      <div><CountryDetail></CountryDetail></div>
      <Route path="/countrydetail/:cca3" component={CountryDetail} />

    </div>
    </div>
  );
}


export default App;


