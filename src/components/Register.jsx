import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';

const Register = () => {

  const {createUser} = useContext(AuthContext)
  const [error , setError] = useState(null) 
  const navigate = useNavigate() ;

  const handleAlert = () => {
    Swal.fire({
      title: "Registered Successfully ",
      icon: "success"
  });
}

  const handleRegister = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    const confrimpassword = e.target.confrimpassword.value ;
    const name = e.target.name.value ;
    console.log(name , email, password , confrimpassword ) ; 

    if ( password.length < 6) {
      setError("Password must be at least 6 characters")
      return ;
    }
   
    if( password != confrimpassword ) { 
      setError("Passwords do not match")
      return ;
    } 

    createUser(email, password)
    .then((res) => {
       console.log(res.user)
       handleAlert()
       setError(null)
       navigate('/')

       
       updateProfile(res.user , {
        displayName: name 
      })
      .then(() => {
         console.log("Profile Updated")
      })
      .catch((err) => {
         console.log(err.message)
      })
    })
    .catch((err) => {
        console.log(err.message)
        setError("This Email Already Exists")
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confrimpassword"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
      {error && <p className='text-red-500 text-lg mt-4 font-normal'>{error}</p> }
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