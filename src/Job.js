import React from "react";
import './Job.css'

function Job({ job }) {
    console.log('job ==>', job);

    return (
        <div className="Job">
            <h3>{job.title}</h3>
            {/* TODO: figure out how to display the company handle on the jobs.js page, but not the companyDetails page */}
            <h3>Salary: {job.salary}</h3>
            <h3>Equity: {job.equity}</h3>
        </div>
    )
}

export default Job;