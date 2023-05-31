import React, { useState, useEffect } from "react"
import JoblyAPI from "./joblyApi";
import Job from "./Job";
import SearchBar from './SearchBar'
import './Jobs.css'

/**Jobs component:
 * 
 * Props: 
 * - none
 * 
 * State:
 * - jobList array: list of props to pass into Job to create components
 * 
 * Jobly -> Jobs -> Job 
 */

function Jobs() {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        async function getJobs() {
            const response = await JoblyAPI.getJobs();
            setJobList(response);
            return response;
        }
        getJobs();
    }, []);

    async function handleSearch(results) {
        const response = await JoblyAPI.getJobs(results);
        setJobList(response);
        return response;
    }

    if (!jobList) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="jobContainer">
            <SearchBar handleSearch={handleSearch} />
            {jobList.map((j) => {
                return <Job job={j} key={j.id} />
            })}
        </div>
    )

}

export default Jobs;