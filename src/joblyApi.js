/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};
    console.log("params", params)

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle.
   *
   * Accepts:
   * -Company handle
   *
   * Returns:
   * - A company object that contains:
   *   { handle, name, description, numEmployees, logoUrl, jobs}
   *      where jobs = [{ id, title, salary, equity, companyHandle, companyName }...]
   */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log("res.company ===>", res.company);
    return res.company;
  }

  /** Get companies.
   *
   * Accepts argument to filter results from SearchBar.
   * If no argument passed, all companies are returned.
   *
   * Returns an array of company objects that contain:
   * - [{ handle, name, description, numEmployees, logoUrl }...]
   */

  static async getCompanies(nameLike) {
    let res = await this.request(`companies/`, { nameLike });

    return res.companies;
  }

  /** Get Jobs.
   *
   * Accepts argument to filter results from SearchBar
   *
   * Returns an array of job objects from the API :
   * - [{ id, title, salary, equity, companyHandle, companyName }...]
   */
  static async getJobs(title) {
    console.log("what the hell is this?", title);
    console.log("what the hell is this?", { title });

    let res = await this.request(`jobs/`, { title });
    return res.jobs;
  }
}

export default JoblyApi;
