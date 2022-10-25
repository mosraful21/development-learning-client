import React from 'react';
import { Link } from 'react-router-dom';
import logo from './banner.jpg';

const Home = () => {
    return (
        <div>
            <img className='w-full h-2/4' src={logo} alt="" />
            <Link to='/courses'> <button className="text-3xl text-white w-full bg-pink-400 p-2">enroll now</button></Link>
        </div>
    );
};

export default Home;