import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignupForm.css'
/** Renders signup or profile form
 * 
 * Props:
 * - signup or editProfile function
 * 
 * RoutesList -> SignupForm
 * 
 */

function SignUpForm({ signup }) {
  const navigate = useNavigate();

  const [flashMessage, setFlashMessage] = useState(null);
  const initialState = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(initialState);


  /** Send {formData: username} to parent
   *    & clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setFlashMessage(err);
      return;
    }

    setFlashMessage([]);
  }

  /** Update local state w/curr state of input*/
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  }

  return (  
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="SignupForm-title mt-5">Sign Up</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {flashMessage && (
                <div>
                  {flashMessage.map((message, index) => (
                    <p key={index}>{message}</p>
                  ))}
                </div>
              )}

              <div className="d-grid">
                <button className="btn btn-dark" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
