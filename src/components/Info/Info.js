import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Info = () => {
    const info = useLoaderData();
    return (
        <div className='lg:w-4/5 m-auto lg:mt-12 border'>
            <h1 className='text-3xl text-center font-semibold mt-4'>Course Name: {info.title}</h1>
            <div className='lg:flex justify-between'>
                <img className='w-72 h-72 ml-8 mt-4' src={info.image} alt="" />
                <p className='p-8 text-2xl text-justify'> <span className='font-semibold'>Details:</span> {info.details}</p>
            </div>
            <div className='grid justify-items-center mb-4'>
                <Link to={`/checkout/${info.id}`}>
                    <button className="btn btn-active btn-accent">Get premium access</button>
                </Link>
            </div>
        </div>
    );
};

export default Info;