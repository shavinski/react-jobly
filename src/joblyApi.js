/* eslint-disable no-unused-vars */
import axios from 'axios';

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

  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};
    // if data is empty(falsey) => companies/
    // if data not empty => companies/{data}

    // with GET, data is empty, params is not
    // with anything other than GET params is empty and data is not
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message || "Unknown error";
      throw Array.isArray(message) ? message : [message];
    }
  }

  ///////////////// Individual API routes /////////////////

  /** Get details on a company by handle.
   *
   * Accepts:
   * -CompanyCard handle
   *
   * Returns:
   * - A company object that contains:
   *   { handle, name, description, numEmployees, logoUrl, jobs}
   *      where jobs = [{ id, title, salary, equity, companyHandle, companyName }...]
   */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
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

  // /companies?nameLike='islandboii' [GET]
  static async getCompanies(nameLike) {
    let res = await this.request(`companies/`, { nameLike });
    return res.companies;
  }

  /** Get JobList.
   *
   * Accepts argument to filter results from SearchBar
   *
   * Returns an array of job objects from the API :
   * - [{ id, title, salary, equity, companyHandle, companyName }...]
   */

  static async getJobs(title) {
    let res = await this.request(`jobs/`, { title });
    return res.jobs;
  }

  /** User apply to job
  * 
  * Input: username and jobId
  * 
  * returns =>
  *              {
  *               "applied": 25
  *              }
  */
  static async applyToJob(data) {
    let res = await this.request(`users/${data.username}/jobs/${data.jobId}`, data, "post")
    return res;
  }

  /** User unapply to job
 * 
 * Input: username and jobId
 * 
 * returns =>
 *              {
 *               "unapplied": 25
 *              }
 */
  static async unapplyToJob(data) {
    let res = await this.request(`users/${data.username}/jobs/${data.jobId}`, data, "delete")
    return res;
  }

  /** Get single job detail
   * 
   * Input: job id
   * 
   * returns =>
   *              {
   *                "job": {
   *                   "id": 1,
   *                   "title": "Conservator, furniture",
   *                   "salary": 110000,
   *                   "equity": "0",
   *                   "company": {
   *                     "handle": "watson-davis",
   *                     "name": "Watson-Davis",
   *                     "description": "Year join loss.",
   *                     "numEmployees": 819,
   *                     "logoUrl": "/logos/logo3.png"
   *                   }
   *                 }
   *               }
   */
  static async getSingleJob(id) {
    let res = await this.request(`jobs/${id}`)
    return res;
  }

  /** Login user and get token
   *
   * Input: data => {username: 'testUser', password:'password'}
   *
   * sets static token to new token and returns token
   */

  static async login(data) {
    let res = await this.request(`auth/token/`, data, "post");
    return res.token;
  }

  /** Register user with data.
   *
   * Accepts:
   *          {
              "username", 
              "password", 
              "firstName", 
              "lastName", 
              "email", 
   *              }
   *
   * Returns: 
   * - Token
   * 
   * Throws BadRequestError on duplicate usernames.
   **/
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Get user details
   * 
   * Input: username from decoded token
   * 
   * returns => user object =>
   *              {
   *              "username": "testUsername",
                  "firstName": "test-fn",
                  "lastName": "test-ln",
                  "email": "test@gmail.com",
                  "isAdmin": false,
                  "applications": []
   *               }
   */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Clears token value on logout */

  static logout() {
    this.token = "";
  }

  /**
   *  Updates user data 
   * 
   * Returns:
   * -JSON user data
   * -Error Message(s)
   */
  static async editProfile(username, formData) {
    let res = await this.request(`users/${username}`, formData, 'patch');
    return res.user;
  }

}

export default JoblyApi;
