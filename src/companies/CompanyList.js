import React, { useState, useEffect } from "react";
import JoblyAPI from "../api/joblyApi";
import CompanyCard from "./CompanyCard";
import SearchBar from "../searchBars/SearchBar";
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
    return <h1 data-testid='loading'>Loading...</h1>;
  }

  return (
    <div data-testid="resolved" className='CompanyList col-md-8 offset-md-2'>
      <SearchBar handleSearch={handleSearch} className />
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
