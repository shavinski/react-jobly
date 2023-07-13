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
    const [flashMessage, setFlashMessage] = useState([]);

    /** Send {formData: username} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            await login(formData);
            navigate("/");
        } catch (err) {
            console.log('ERROR', err);
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
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="LoginForm-title mt-5">Log In</h3>
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
                                    autoComplete="username"
                                    required
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
                                    autoComplete="current-password"
                                    required
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
                                <button className="btn btn-primary" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm