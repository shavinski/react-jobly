import React, { useState, useEffect } from "react"
import JoblyAPI from "./joblyApi";
import Job from "./Job";
import SearchBar from './SearchBar'

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
        <div>
            <SearchBar handleSearch={handleSearch} />
            {jobList.map((j) => {
                return <Job job={j} key={j.id} />
            })}
        </div>
    )

}

export default Jobs;