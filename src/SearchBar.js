import React, { useState } from "react";

/** Form for searching companies and/or jobs
 *
 * Props:
 *  handleSearch, function to handle search term inputted in form
 * 
 * State: formData
 * - sends query to fn received from parent.
 *
 * {Companies, Jobs} -> SearchBar
 */

function SearchBar({handleSearch}) {
  const initialState = { searchTerm: ""};
  const [formData, setFormData] = useState(initialState);

  /** Send {searchTerm: value} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form className='m-3' onSubmit={handleSubmit}>

      <div className="d-flex ">
        <input
          className=""
          placeholder="Enter Search Term..."
          id="searchTerm"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-primary btn-sm">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
