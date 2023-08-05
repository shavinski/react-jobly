import React, { useState, useEffect } from "react"
import JoblyAPI from "../api/joblyApi";
import JobCard from "../jobs/JobCard";
import './CompanyList.css'
import { useParams } from "react-router-dom";
import './CompanyDetail.css'

/** Renders information on single company with all jobs listed by company
 * 
 * * Props: 
 * - none
 * 
 * State: companyDetail 
 * - should be an object with company data
 * 
 *  CompanyList -> CompanyDetail -> JobCard
 */

function CompanyDetail({ handleApplyButton }) {
    const [companyDetail, setCompanyDetail] = useState(null);
    const { handle } = useParams();

    useEffect(function loadCompanyDetail() {
        async function getCompanyDetail() {
            const response = await JoblyAPI.getCompany(handle);
            setCompanyDetail(response);
            return response;
        }
        getCompanyDetail();
    }, []);

    if (!companyDetail) {
        return <h1 data-testid="loading" >Loading...</h1>
    }

    return (
        <div data-testid="resolved" className="CompanyDetail col-md-8 offset-md-2" onClick={handleApplyButton}>
            <h3 className="m-4">Our culture at {companyDetail.name}</h3>
            <h5 className="mb-5">{companyDetail.description}</h5>
            {companyDetail.jobs.map((j) => {
                return <JobCard job={j} key={j.id} />
            })}
        </div>
    )

}

export default CompanyDetail;