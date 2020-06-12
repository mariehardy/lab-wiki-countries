import React, { Component } from 'react'
// import CountryTitle from './CountryTitle'
import countriesData from '../countries.json'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

    export const myCountries = countriesData;

    export const countriesList = () => {

    // const countriesData = props.countriesData;

    return (
        <div>
            <ul>

            {myCountries.map((oneCountry) => {
                {/* console.log('oneCountry.cca3 is ====== ' + oneCountry.cca3) */}
        return (
          <div key={oneCountry.cca3}>
            <h3><Link to={"/countrydetail/" + oneCountry.cca3}>{oneCountry.name.common}</Link></h3>
          </div>
        )
      })}

              {/* {myCountries.map(el => <li key={el.cca3}><Link to={"/countrydetail" + el.cca3}>{el.name.common}</Link></li>)} */}
              {/* {countriesData.map(el => <Link to={"/countrydetail" + el.cca3}><CountryTitle key={el.cca3} name={el.name.common} /></Link>)} */}

            </ul>
        </div>
    )
}

// }

// export default CountriesList
