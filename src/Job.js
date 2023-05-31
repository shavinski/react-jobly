import React from "react";
import './Job.css'

/** Renders a job card with info
 * 
 * props: {job} 
 * - job will be an object with all info about a single job posting
 * 
 * CompanyDetail -> Job
 */

function Job({ job }) {
    return (
        <div className="Job">
            <h2>{job.title}</h2>
            <h3>{job.companyHandle}</h3>
            {job.salary && 
                <h5>💸💸Salary: {job.salary}💸💸</h5>
            }
            <h5>💹💹Equity: {job.equity}💹💹</h5>
        </div>
    )
}

export default Job;