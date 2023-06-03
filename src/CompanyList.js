import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyAPI from "./joblyApi";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import "./CompanyList.css";

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
    <div className='CompanyList col-md-8 offset-md-2'>
      <SearchBar handleSearch={handleSearch} />
      {companyList.length
        ? (
          <div className="CompanyList-list">
            {companyList.map(c => (
              <CompanyCard
                key={c.handle}
                comp={c}
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
    </div>
  );
}

export default CompanyList;
