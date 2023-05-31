import React from "react"

/**
 * returns single company tile 
 */

function Company({comp}){

    return (
        <div className="Company">
            <h3>{comp.name}</h3>
            <h3>{comp.description}</h3>
            <img src={comp.logoUrl} alt="company logo"> </img>
        </div>
    )
}

export default Company;