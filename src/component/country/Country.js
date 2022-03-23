import React from 'react';
import './country.css'
const Country = (props) => {
    const { name, area, flags, population, region, capital } = props.country
    return (
        <div className="country">
            <img src={flags.svg} alt="" />
            <h2>Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Region: {region}</h4>
            <p>Area: <small>{area}</small></p>
            <p>Population: <small>{population}</small></p>
        </div>
    );
};

export default Country;