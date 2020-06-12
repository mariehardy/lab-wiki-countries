import React from 'react';
import './App.css';

import { countriesList as CountriesList } from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App () {

  return (
    <div className="App">
    <div className="container">


      <div><CountriesList></CountriesList></div>
      {/* <div><CountryDetail></CountryDetail></div> */}
      {/* <Route exact path='/countrieslist' component={CountriesList}/> */}
      <Switch>
        <Route path="/:id" component={CountryDetail} />
      </Switch>
    </div>
    </div>
  );
}


export default App;


