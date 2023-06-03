import React from "react"
import { Link } from "react-router-dom";
import './CompanyCard.css'

/** Design for company cards that load on /companies 
 * 
 * props: {comp} 
 * - will be an object with info about a single company
 * 
 * CompanyList -> CompanyCard 
 */

function CompanyCard({ comp }) {

    return (
        <Link className="CompanyCard card" to={`/companies/${comp.handle}`}>
            <div className="card-body">
                <h6 className="card-title">
                    {comp.name}
                    {comp.logoUrl && <img src={comp.logoUrl}
                        alt={comp.name}
                        className="float-end ms-5" />}
                </h6>
                <p><small>{comp.description}</small></p>
            </div>
        </Link>
    )
}

export default CompanyCard;
