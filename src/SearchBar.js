import React, { useState } from "react";

/** Form for searching companies and/or jobs
 *
 * Has state for the searchTerm characters
 * sends query to fn received from parent.
 *
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm"></label>
      <input
      placeholder="Enter Search Term..."
        id="searchTerm"
        name="searchTerm"
        value={formData.searchTerm}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
