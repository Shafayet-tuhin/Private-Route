import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'

const Login = () => {

  const { signInUser, signInWithGoogle, signInWithGithub , resetPassword } = useContext(AuthContext)
  const [email , setEmail] = useState(null)
  const [error , setError] = useState(null) ;

  const navigate = useNavigate();


  const handleAlert = () => {
    Swal.fire({
      title: "Registered Successfully ",
      icon: "success"
  });
}

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        handleAlert();
        console.log(res.user)
        e.target.reset();
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message)
        setError("Wrong id or password")
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        handleAlert();
        console.log(res.user)
        navigate('/')
      })
      .catch((er) => console.log(er))
  }

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        handleAlert();
        console.log(res.user)
        navigate('/')
      })
      .catch((er) => console.log(er))
  }
  
  

  const handleReset = () => {
      resetPassword(email)
      Swal.fire({
        title: "Please Check your Email",
        icon: "success"
    });
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
                onChange={(e)=> setEmail(e.target.value)}
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

              {error && <p className='text-red-500 text-lg mt-4 font-normal'>{error}</p>}

              <label className="label">
                <a onClick={handleReset} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p> Dont have an account ? <Link className="text-blue-500" to='/register'>Click here</Link> </p>

            <div className="flex justify-center">
              <div >
                <h2 className=" text-sky-700">Or Login Using</h2>
                <div className="flex gap-5 justify-center mt-2 text-2xl">
                  <button onClick={handleGoogleSignIn} className=""><FcGoogle /> </button>
                  <button onClick={handleGithubSignIn} className=""><FaGithub /> </button>
                </div>
              </div>
            </div>

          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
