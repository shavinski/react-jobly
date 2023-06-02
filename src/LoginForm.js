import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"
/** Loads login form page 
 * 
 * Props:
 * - Login function
 * 
 * Login -> LoginForm
 */

function LoginForm({ login }) {
    const navigate = useNavigate();

    const initialState = { username: '', password: '' };
    const [formData, setFormData] = useState(initialState);
    const [flashMessage, setFlashMessage] = useState(null);


    /** Send {formData: username} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            await login(formData);
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
            [name]: value
        })
        )
    }

    return (
        <div className="d-flex-column justify-content-center m-5">

            <div>
                <h3 className="LoginForm-login">Log in</h3>
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}></input>
                    <small id="emailHelp" class="form-text text-muted">Never share your password!</small>
                </div>

                {flashMessage && (
                    <div>
                        {flashMessage.map((message, index) => (
                            <p key={index}>{message}</p>
                        ))}
                    </div>
                )}

                <button className="btn btn-primary m-2" onClick={handleSubmit}>Submit</button>
            </form>
        </div >
    )
}

export default LoginForm