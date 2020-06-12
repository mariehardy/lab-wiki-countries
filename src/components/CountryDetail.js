import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom';

// import { myCountries } from './CountriesList';
import countriesData from '../countries.json'
 

const CountryDetail = (props) => {

  // console.log('props are ===== ' + props.match);

  let countryDetails = countriesData.find((el) => el.cca3 === props.match.params.id)
  console.log('countryDetails is === ' + countryDetails)

  let countriesBorders = countriesData.filter((el) => el.borders.includes(countryDetails.cca3))
  
  return (
    <div>
    country detail here

      <div> Capital: {countryDetails.capital}</div>
      <div> Area : {countryDetails.area} km<sup>2</sup></div>
      <ul>Borders:
      {countriesBorders.map((el, index) => {
        return (
          <li key={index}>
          <Link to={"/" + el.cca3}>{el.name.common}</Link>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default CountryDetail