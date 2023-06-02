import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

/** Renders signup or profile form
 * 
 * Props:
 * - signup or editProfile function
 * 
 * RoutesList -> SignupForm
 * 
 * FIXME: Just make a new one for Profile
 */

function ProfileForm({ editProfile }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(userContext);
  console.log('currentUSer PROFILEFORM', currentUser);
  const initialState = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  }
  const [formData, setFormData] = useState(initialState);

  /** Send {formData: username} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    editProfile(currentUser.username, formData);
    // navigate("/");
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
    <div>
      <h3>Edit Profile</h3>
      <form>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            disabled
            id='username'
            name='username'
            value={currentUser.username}
          ></input>
        </div>

        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            type='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>

        {/* TODO: Add conditional to display error message */}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
