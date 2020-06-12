import React, { Component } from 'react'
// import CountryTitle from './CountryTitle'
import countriesData from '../countries.json'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

    // export const myCountries = countriesData;

    export const countriesList = () => {

    // const countriesData = props.countriesData;

    return (
        <div>
            <ul>
            {countriesData.map((el) => {
        return (
          <div key={el.cca3}>
          <img src={el.flag} alt={el.name.common}></img>
            <h3><Link to={"/" + el.cca3}>{el.name.common}</Link></h3>
          </div>
        )
      })}
            </ul>
        </div>
    )
}

// }

// export default CountriesList
