import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import { countriesList as CountriesList } from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App () {

  return (
    <div className="App">
    <div className="container-fluid container--layout">
    <div class="row">
  <div class="col-4">
  <CountriesList ></CountriesList>
</div>
  <div class="col-8">
  <Switch>
        <Route path="/:id" component={CountryDetail} />
      </Switch>
      </div>
      </div>
    </div>
    </div>
  );
}


export default App;


