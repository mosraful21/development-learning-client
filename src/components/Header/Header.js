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
        <div className="navbar bg-primary text-primary-content justify-between">
            <div>
                <img className='h-10 w-10 ml-2' src={logo} alt="images" />
                <Link className="btn btn-ghost normal-case text-xl">Development Learning Platform</Link>
            </div>
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>


                {
                    user?.uid ?
                        <>
                            {user?.displayName && <h2 className='text-2xl font-medium mx-1'>{user.displayName}</h2>}
                            {user?.photoURL ?
                                <img className='h-8 rounded-full' src={user.photoURL} alt="" />
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