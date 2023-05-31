import React from "react"
import './Company.css'

/** Design for company cards that load on /companies 
 * 
 * props: {comp} 
 * - will be an object with info about a single company
 * 
 * Companies -> Company 
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
