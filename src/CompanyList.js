import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import JoblyAPI from "./joblyApi";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import "./CompanyList.css";
import userContext from './userContext'

/** Loads company details
 *
 * * Props:
 * - none
 *
 * App -> CompanyList
 */

function CompanyList() {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      const response = await JoblyAPI.getCompanies();
      setCompanyList(response);
      setIsLoading(false);
    }

    getCompanies();
  }, []);

  async function handleSearch(results) {
    const response = await JoblyAPI.getCompanies(results);
    setCompanyList(response);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='companyContainer'>
      <SearchBar handleSearch={handleSearch} />
      {companyList.map((c) => {
        return (
          <Link className='CompanyLink' key={c.handle} to={`${c.handle}`}>
            <CompanyCard key={c.handle} comp={c} />
          </Link>
        );
      })}
    </div>
  );
}

export default CompanyList;
