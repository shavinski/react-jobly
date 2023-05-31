import React, {useState, useEffect} from "react"
import JoblyAPI from "./joblyApi";
import Job from "./Job";
import './Companies.css'
import { useParams } from "react-router-dom";

/** Renders information on single company with all jobs listed by company
 * 
 * * Props: 
 * - none
 * 
 * State: companyDetail 
 * - should be an object with company data
 * 
 *  Companies -> CompanyDetail -> Job
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
            <h1>{companyDetail.name}</h1>
            <h3>{companyDetail.description}</h3>
            {companyDetail.jobs.map((j) => {
                return <Job job={j} key={j.id} />
            })}
        </div>
    )

}

export default CompanyDetail;