import React from "react"
import './Company.css'
/**
 * returns single company tile 
 */

function Company({comp}){

    return (
        <div className="Company">
            <h2>{comp.name}</h2>
            <h4>{comp.description}</h4>
            {comp.logoUrl &&
            <img src={`../${comp.logoUrl}`} alt="company logo"/>}
        </div>
    )
}

export default Company;
