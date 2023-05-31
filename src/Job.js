import React from "react";
import './Job.css'

function Job({ job }) {
    console.log('job ==>', job);

    return (
        <div className="Job">
            <h3>{job.title}</h3>
            <h3>Salary: {job.salary}</h3>
            <h3>Equity: {job.equity}</h3>
        </div>
    )
}

export default Job;