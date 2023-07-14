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
        <div className="JobCard card p-3 d-flex align-items-center">

            {job.companyName === undefined && (
                <h6>{job.title}</h6>
            )}

            {job.companyName !== undefined && (
                <h6>{job.title} at {job.companyName}</h6>
            )}

            {job.salary !== undefined &&
                <small>
                    Salary: {"$" + Intl.NumberFormat("en-US").format(job.salary)}
                </small>
            }
            {job.equity !== undefined && (
                <div>
                    <small>Equity: {job.equity}</small>
                </div>
            )}

            <button className="btn btn-sm btn-dark fw-bold mt-3">Apply</button>
        </div>
    )
}

export default JobCard;