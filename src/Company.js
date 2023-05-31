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

// {

//     "name": "Anderson, Arias and Morrow",
//     "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",

//     "logoUrl": "/logos/logo3.png"
// }