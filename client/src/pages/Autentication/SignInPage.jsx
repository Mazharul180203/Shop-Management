import React from 'react';
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="form_container p-5 border border-dark rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control mt-1"/>
                    </div>
                    <div className="mb-2">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control mt-1"/>
                    </div>
                    <div>
                        <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
                        <label htmlFor="check" className="custom-input-lable ms-2">
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid mt-2">
                        <button className="btn btn-primary btn-block form-control mt-2">Login</button>
                    </div>
                    <Link to="/signup" type="button"
                          className="btn btn-outline-primary btn-block form-control mt-2">SIGN UP</Link>

                </form>
            </div>
        </div>
    );
};

export default SignInPage;