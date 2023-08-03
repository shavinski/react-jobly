import React, { useContext } from "react";
import userContext from '../userContext'
import './JobCard.css'

/** Renders a job card with info
 * 
 * props: {job} 
 * - job will be an object with all info about a single job posting
 * 
 * CompanyDetail -> JobCard
 */

function JobCard({ job }) {
    const { currentUser } = useContext(userContext);

    const unapplyStyle = {
        backgroundColor: "red",
        color: "white"
    }

    console.log('this is the job', job);

    function applyButton() {
        return (
            <button id={job.id} className="btn btn-sm fw-bold mt-3">
                Apply
            </button>
        )
    }

    function unapplyButton() {
        return (
            <button id={job.id} style={unapplyStyle} className="btn btn-sm fw-bold mt-3">
                Unapply
            </button>
        )
    }

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

            {!currentUser.applications.includes(job.id) ? applyButton() : unapplyButton()}

        </div >
    )
}

export default JobCard;