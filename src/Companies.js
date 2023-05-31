
import React, {useState, useEffect} from "react"
import JoblyAPI from "./joblyApi";
import Company from "./Company";
import SearchBar from './SearchBar'
// import { useParams } from "react-router-dom";

function Companies() {
    const [companyList, setCompanyList] = useState([]);
    // const { handle } = useParams();

    useEffect(() => {
        async function getCompanies() {
            const response = await JoblyAPI.getCompanies();
            setCompanyList(response);
            return response;
        }
        getCompanies();
    }, []);


        async function handleSearch(results) {
            const response = await JoblyAPI.getCompanies(results);
            setCompanyList(response);
            return response;
        }


    if (!companyList) {
        return <h1>Loading...</h1>
     }

     return (
        <div>
            <SearchBar handleSearch={handleSearch}/>
            {companyList.map((c) => {
                return <Company  comp={c}/>
            })}
        </div>
    )

}

export default Companies;