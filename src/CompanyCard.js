import React from "react"
import './CompanyCard.css'

/** Design for company cards that load on /companies 
 * 
 * props: {comp} 
 * - will be an object with info about a single company
 * 
 * CompanyList -> CompanyCard 
 */

function CompanyCard({comp}){

    return (
        <div className="CompanyCard">
            <h2>{comp.name}</h2>
            <h4>{comp.description}</h4>
            {comp.logoUrl &&
            <img src={`../${comp.logoUrl}`} alt="company logo"/>}
        </div>
    )
}

export default CompanyCard;
