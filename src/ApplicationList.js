import React, { useContext, useEffect, useState } from "react";
import userContext from './userContext'
import JoblyApi from "./joblyApi";


function ApplicationList() {
    const { currentUser } = useContext(userContext);
    const [isLoading, setIsLoading] = useState(true);
    // const [userApplications, setUserApplications] = useState([]);

    // useEffect(() => {
    //     async function getSingleJob() {
    //         const response = await JoblyApi.getSingleJob(currentUser.applications[0]);
    //         setUserApplications((prev) => [...prev, response])
    //     }
    //     getSingleJob();
    // }, [])

    return (
        <div>
            <h1>Your sent applications!</h1>

            <p>{currentUser.applications}</p>
        </div>
    )
}

export default ApplicationList;