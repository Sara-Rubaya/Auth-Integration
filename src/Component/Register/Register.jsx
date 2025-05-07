// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
// import { auth } from '../../Firebase.init';

const Register = () => {

    const {createUser} = use(AuthContext);
    const navigate = useNavigate();
   

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(email, name, password);

        //create  user
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     console.log(result);
        // })
        // .catch(error =>{
        //     console.log(error);
        // })
        createUser(email,password)
        .then(result =>{
            console.log(result);
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="card bg-base-100 mx-auto mt-30 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold pl-6 pt-4">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Email" />

              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email"  />

              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />

              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Already have an account? Please <Link className="text-blue-500 underline" to="/login">Log In</Link></p>
          </div>
        </div>
    );
};

export default Register;