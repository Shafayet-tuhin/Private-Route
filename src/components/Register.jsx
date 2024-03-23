import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    const name = e.target.name.value ;
    console.log(name , email, password  ) ; 

    createUser(email, password)
    .then((res) => {
       console.log(res.user)
    })
    .catch((err) => {
        console.log(err.message)
    })

  }

  return (
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              
    
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p> Already have an account ? <Link className="text-blue-500" to='/login'>Click here</Link> </p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register