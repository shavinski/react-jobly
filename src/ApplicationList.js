import React, { useContext, useEffect, useState } from "react";
import userContext from './userContext'
import JoblyApi from "./joblyApi";
import JobCard from "./JobCard";


function ApplicationList() {
    const { currentUser } = useContext(userContext);
    const [applied, setApplied] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getJobs() {
            const response = await JoblyApi.getJobs();
            let appliedJobs = response.filter(job => currentUser.applications.includes(job.id));
            setApplied(appliedJobs)
            setIsLoading(false);
        }
        getJobs();
    }, [])


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>

            {applied.length
                ? (
                    <div className="col-md-8 offset-md-2">
                        <h1 className="mt-3">All your applications!</h1>
                        {applied.map((job) => {
                            return <JobCard job={job} key={job.id} />
                        })}
                    </div>

                ) : (
                    <h1 className="mt-3">No applications sent so far!</h1>
                )
            }


        </div>
    )
}

export default ApplicationList;