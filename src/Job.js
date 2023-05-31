import React from "react";
import './Job.css'

function Job({ job }) {
    return (
        <div className="Job">
            <h2>{job.title}</h2>
            <h3>{job.companyHandle}</h3>
            {job.salary && 
                <h1>💸💸Salary: {job.salary}💸💸</h1>
            }
            <h4>💹💹Equity: {job.equity}💹💹</h4>
        </div>
    )
}

export default Job;