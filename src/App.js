import React from 'react';
import logo from './logo.svg';
import './App.css';

import countriesData from './countries.json'

import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App () {

console.log(countriesData)

  return (
    <div className="App">
    <div className="container">
      <div><CountriesList countriesData={countriesData}></CountriesList></div>
      <div><CountryDetail></CountryDetail></div>
    </div>
    </div>
  );
}


export default App;


