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
  const [noMoreData, setNoMoreData] = useState(false);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    async function getCompanies() {
      const response = await JoblyAPI.getCompanies(offset);
      if (response.length === 0) setNoMoreData(true);
      setCompanyList(prevData => [...prevData, ...response]);
      setIsLoading(false);
    }

    getCompanies();
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
      console.log('scrollheight', scrollHeight, 'currentHeight', currentHeight);

      if (noMoreData) return

      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 20);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset]);

  async function handleSearch(results) {
    const response = await JoblyAPI.getCompanies(offset, results);
    setCompanyList(response);
  }

  if (isLoading) {
    return <h1 data-testid='loading'>Loading...</h1>;
  }

  return (
    <div data-testid="resolved" className='CompanyList col-md-8 offset-md-2'>
      <SearchBar handleSearch={handleSearch} />
      <p>Current Offset: {offset}</p>
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
