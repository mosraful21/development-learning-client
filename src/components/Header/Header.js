import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import logo from './learning.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="navbar bg-primary text-primary-content justify-between">
            <div>
                <img className='h-10 w-10 ml-2' src={logo} alt="images" />
                <Link className="btn btn-ghost normal-case text-xl">Development Learning Platform</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/theme'>Theme</Link>
            </div>
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/faq'>FAQ</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                {
                    user?.email
                        ?
                        <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className='btn btn-sm'>Log In</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Header;