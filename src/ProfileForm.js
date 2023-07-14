import React, { useContext, useState } from "react";
import userContext from "./userContext";
import Alert from "./Alert";
import './ProfileForm.css'

/** Renders signup or profile form
 *
 * Props:
 * - signup or editProfile function
 *
 * RoutesList -> SignupForm
 *
 */

function ProfileForm({ editProfile }) {
  const { currentUser } = useContext(userContext);

  const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [flashMessage, setFlashMessage] = useState([]);
  const initialState = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  };
  const [formData, setFormData] = useState(initialState);

  /** Send {formData: username} to parent */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await editProfile(currentUser.username, formData);
    } catch (err) {
      setFlashMessage(err);
      return;
    }

    setFlashMessage([]);
    setSaveConfirmed(true);
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
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3 className="ProfileForm-title mt-5">Profile</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                disabled
                className="form-control"
                placeholder={currentUser.username}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
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
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {flashMessage.length
              ? <Alert type="danger" messages={flashMessage} />
              : null}

            {saveConfirmed
              ?
              <Alert type="success" messages={["Updated successfully."]} />
              : null}


            <div className="d-grid">
              <button className="btn btn-dark" onClick={handleSubmit}>
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
