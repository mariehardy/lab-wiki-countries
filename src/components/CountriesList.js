import React, { Component } from 'react'
import CountryTitle from './CountryTitle'
import { Link } from 'react-router-dom';



class CountriesList extends Component {

    state = {
        countriesData: this.props.countriesData,
    }
    
    render() {

    return (
        <div>
            <ul>
              {this.state.countriesData.map(el => <Link to={`/countrydetail${el.cca3}`}><CountryTitle key={el.cca3} name={el.name.common} /></Link>)}
            </ul>
        </div>
    )
}

}

export default CountriesList
