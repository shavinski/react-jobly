import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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


    /** Send {formData: username} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        await login(formData);
        navigate("/");
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
        <div>
            <h3>Log in</h3>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}></input>
                </div>

                {/* TODO: Add conditional to display error message */}
                
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm