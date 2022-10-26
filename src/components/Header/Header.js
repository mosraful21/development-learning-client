import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Theme from '../Theme/Theme';
import logo from './learning.png';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ </Link>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <img className='h-10 w-10 ml-2' src={logo} alt="images" />
                    <p className="text-xl font-semibold lg:visible invisible">Development Learning Platform</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ </Link>
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            {user?.photoURL ?
                                <img className='h-8 rounded-full' src={user.photoURL} alt="" title={user.displayName} />
                                : <FaUser> </FaUser>
                            }
                        </>
                        :
                        <>
                            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                        </>
                }

                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut} className="btn btn-sm mx-3">Sign Out</button>
                        :
                        <>
                        </>
                }
                <div className='ml-6'>
                    <Theme></Theme>
                </div>
            </div>
        </div>
    );
};

export default Header;