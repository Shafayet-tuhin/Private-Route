import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import Swal from 'sweetalert2'

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const navlinks = <>
        {
            user ?
                <>
                    <li> <NavLink to='/' > Home </NavLink>  </li>
                    <li> <NavLink to='/order' > Orders </NavLink>  </li>
                    <li> <NavLink to='/profile' > Profile </NavLink>  </li>
                </> :
                <>
                    <li> <NavLink to='/' > Home </NavLink>  </li>
                    <li> <NavLink to='/login' > Login </NavLink>  </li>
                    <li> <NavLink to='/register' > Register </NavLink>  </li>
                </>
        }

    </>


    const handleLogOut = () => {
        logOut()
            .then((res) => {
                Swal.fire({
                    title: "Logged Out Successfully ",
                    icon: "success"
                });
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TUHIN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className='flex px-3 py-2 gap-1'>
                        <p>{user.email}</p>
                        <span class="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
                    </div> : <Link className='btn btn-sm' to='/login' >Login</Link>

                }


            </div>
        </div>
    )
}

export default Navbar