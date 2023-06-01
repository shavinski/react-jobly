import React, {useState, useEffect} from "react"
import JoblyAPI from "./joblyApi";
import JobCard from "./JobCard";
import './CompanyList.css'
import { useParams } from "react-router-dom";

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

function CompanyDetail() {
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
        return <h1>Loading...</h1>
     }

    return (
        <div className="companyContainer">
            <h2>{companyDetail.name}</h2>
            <h4>{companyDetail.description}</h4>
            {companyDetail.jobs.map((j) => {
                return <JobCard job={j} key={j.id} />
            })}
        </div>
    )

}

export default CompanyDetail;