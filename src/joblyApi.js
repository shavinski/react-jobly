/* eslint-disable no-unused-vars */
import axios from "axios";
import jwt_Decode from "jwt-decode";


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
  // static token = 
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

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
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // FIXME: Note: A falsy or malformed token will throw an InvalidTokenError error. from docs
  static decodeToken(token) {

      const { username } = jwt_Decode(token)
      return username;
    }
   

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

  /** Get Jobs.
   *
   * Accepts argument to filter results from SearchBar
   *
   * Returns an array of job objects from the API :
   * - [{ id, title, salary, equity, companyHandle, companyName }...]
   */

  // /jobs?title='apple' [GET]
  static async getJobs(title) {
    console.log("what the hell is this?", title);
    console.log("what the hell is this?", { title });

    let res = await this.request(`jobs/`, { title });
    return res.jobs;
  }

  /** Login user and get token
   * 
   * Input: data => {username: 'testUser', password:'password'}
   * 
   * sets static token to new token and returns token 
   */

  // delete or patch just switch "post" to "delete" or "patch"
  static async login(data) {
    let res = await this.request(`auth/token/`, data , "post");
    this.token = res.token
    return res.token;
  }

  /** Login user and get token
   * 
   * Input: data => {username: 'testUser', password:'password'}
   * 
   * sets static token to new token and returns token 
   */

  // delete or patch just switch "post" to "delete" or "patch"
  static async signup(data) {
    let res = await this.request(`auth/register`, data , "post");
    this.token = res.token
    return res.token;
  }

  /** Get user details
   * 
   * Input: username
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
    return res
  }

}

export default JoblyApi;
