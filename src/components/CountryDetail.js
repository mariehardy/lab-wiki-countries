import React from 'react'

import { myCountries } from './CountriesList';
import { countriesList as CountriesList } from './CountriesList'
 

const CountryDetail = (props) => {

  // console.log('props are ===== ' + props.match);
  // console.log('myCountries are ===== ' + myCountries[0].cca3);

  let filteredCountryDetail = myCountries.filter(el => el.cca3 === props.match.params.cca3)[0]
  console.log('filteredCountryDetail is === ' + filteredCountryDetail)

// console.log('filteredCountryDetail is === ' + filteredCountryDetail)

  return (
    <div className="App">
    country detail here
      <div>{filteredCountryDetail.name.common}</div>
      <div>{filteredCountryDetail.cca3}</div>
    </div>
  );
}

export default CountryDetail