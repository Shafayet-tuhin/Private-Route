import React, { useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {

  const {signInUser , signInWithGoogle} = useContext(AuthContext) 

   const navigate = useNavigate() ;

  const handleLogin = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    console.log( email, password ) ; 

    signInUser(email, password)
    .then((res) => {
      console.log(res.user)
      e.target.reset() ;
     navigate('/')
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((res) => {
      console.log(res.user)
      navigate('/')
    })
    .catch((er) => console.log(er))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p> Dont have an account ? <Link className="text-blue-500" to='/register'>Click here</Link> </p>

          </form>

          <button onClick={handleGoogleSignIn} className="btn btn-ghost mb-2">Login with Google </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
