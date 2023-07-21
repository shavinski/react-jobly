import React, { useState, useEffect, useContext } from "react";
import JoblyAPI from "./joblyApi";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import "./JobList.css";
import userContext from './userContext'
import { Navigate } from 'react-router-dom'

/**JobList component:
 *
 * Props:
 * - none
 *
 * State:
 * - jobList array: list of props to pass into JobCard to create components
 *
 * Jobly -> JobList -> JobCard
 */


function JobList({ applyToJob }) {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    async function getJobs() {
      const response = await JoblyAPI.getJobs();
      setJobList(response);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  async function handleSearch(results) {
    const response = await JoblyAPI.getJobs(results);
    setJobList(response);
  }

  // async function applyToJob(event) {
  //   const username = currentUser.username
  //   const data = {
  //     "username": username,
  //     "jobId": undefined
  //   }

  //   if(event.target.tagName === "BUTTON") {
  //     data.jobId = event.target.id
  //     console.log(event.target.id);
  //   }

  //   if(data.jobId) {
  //     const response = await JoblyAPI.applyToJob(data)
  //     console.log(response);
  //   }
  // }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className='JobList col-md-8 offset-md-2' onClick={applyToJob}>

      <SearchBar handleSearch={handleSearch} />
      {jobList.map((j) => {
        return <JobCard job={j} key={j.id} />;
      })}
    </div>
  );
}

export default JobList;
