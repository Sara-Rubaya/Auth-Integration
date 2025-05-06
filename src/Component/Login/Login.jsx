import React, { use } from 'react';  // Correct useContext hook import

import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';

const Login = () => {
    const  { signInUser } = use(AuthContext); 
    

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // login user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 mx-auto mt-30 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold pl-6 pt-4">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>
                    New to this site? Please{' '}
                    <Link className="text-blue-500 underline" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
