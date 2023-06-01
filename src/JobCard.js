import React from "react";
import './JobCard.css'

/** Renders a job card with info
 * 
 * props: {job} 
 * - job will be an object with all info about a single job posting
 * 
 * CompanyDetail -> JobCard
 */

function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h2>{job.title}</h2>
            <h3>{job.companyHandle}</h3>
            {job.salary && 
                <h5>💸💸Salary: {job.salary}💸💸</h5>
            }
            <h5>💹💹Equity: {job.equity}💹💹</h5>
        </div>
    )
}

export default JobCard;