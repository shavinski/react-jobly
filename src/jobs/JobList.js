import React, { useState, useEffect, useContext } from "react";
import JoblyAPI from "../api/joblyApi";
import JobCard from "./JobCard";
import SearchBar from "../searchBars/SearchBar";
import "./JobList.css";
import userContext from '../userContext'
import { Navigate } from 'react-router-dom'

/**JobList component:
 *
 * Props:
 * - handleApplyButton
 *    Function that handles applying and unapplying from job
 *
 * State:
 * - jobList array: list of props to pass into JobCard to create components
 *
 * Jobly -> JobList -> JobCard
 */


function JobList({ handleApplyButton }) {
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

  if (isLoading) {
    return <h1 data-testid='loading'>Loading...</h1>;
  }

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div data-testid='resolved' className='JobList col-md-8 offset-md-2' onClick={handleApplyButton}>

      <SearchBar handleSearch={handleSearch} />
      {jobList.map((j) => {
        return <JobCard job={j} key={j.id} />;
      })}
    </div>
  );
}

export default JobList;
