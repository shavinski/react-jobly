import React, {useState, useEffect} from "react"
import JoblyAPI from "./joblyApi";
import JobCard from "./JobCard";
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

     console.log('companyDetail', companyDetail);
    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            {/* <h2 className="m-4">{companyDetail.name}</h2> */}
            <h3 className="m-4">Our culture at {companyDetail.name}</h3>
            <h5 className="mb-5">{companyDetail.description}</h5>
            {companyDetail.jobs.map((j) => {
                return <JobCard job={j} key={j.id} />
            })}
        </div>
    )

}

export default CompanyDetail;