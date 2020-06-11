import React from 'react'

 function CountryTitle(props) {
    return (
        <li>
            <p className="country-title">{props.name}</p>
        </li>
    )
}

export default CountryTitle