import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyAPI from "./joblyApi";
import Company from "./Company";
import SearchBar from "./SearchBar";
import "./Companies.css";

/** Loads company details
 *
 * * Props:
 * - none
 *
 * App -> Companies
 */

function Companies() {
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
            <Company key={c.handle} comp={c} />
          </Link>
        );
      })}
    </div>
  );
}

export default Companies;
