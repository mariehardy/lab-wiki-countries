import React, { Component } from 'react'
// import CountryTitle from './CountryTitle'
import countriesData from '../countries.json'
import './CountriesList.css';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

    // export const myCountries = countriesData;

    export const countriesList = () => {

    // const countriesData = props.countriesData;

    return (
        <div>
            <ul className="list__ul">
            {countriesData.map((el) => {
        return (
          <li className="list__li" key={el.cca3}>
          <img src={el.flag} alt={el.name.common}></img>
            <h3><Link to={"/" + el.cca3}>{el.name.common}</Link></h3>
          </li>
        )
      })}
            </ul>
        </div>
    )
}

// }

// export default CountriesList
