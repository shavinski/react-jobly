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
        <h3 className="title mt-5">Sign up</h3>
        <div className="d-flex-column justify-content-center">
          <form className="form bg-light">
            <div className="form-group">
              <div>
                <label class="form-label mt-3" htmlFor='username'>Username</label>
              </div>
              <div>
                <input
                  class="form-control-sm"
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label class="form-label mt-3" htmlFor='password'>Password</label>
              </div>
              <div>
                <input
                  class="form-control-sm"
                  id='password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label class="form-label mt-3" htmlFor='firstName'>First Name</label>
              </div>
              <div>
                <input
                  class="form-control-sm"
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label class="form-label mt-3" htmlFor='lastName'>Last Name</label>
              </div>
              <div>
                <input
                  class="form-control-sm"
                  id='lastName'
                  type='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label class="form-label mt-3" htmlFor='email'>Email</label>
              </div>
              <div>
                <input
                  class="form-control-sm"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            {flashMessage && (
              <div>
                {flashMessage.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </div>
            )}

            <button className="btn btn-primary m-3" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
