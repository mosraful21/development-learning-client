import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Info = () => {
    const info = useLoaderData();
    return (
        <div className='w-4/5 m-auto mt-12 border'>
            <h1 className='text-3xl text-center font-semibold'>Course Name: {info.title}</h1>
            <p className='p-12 text-2xl'> <span className='font-semibold'>Details:</span> {info.details}</p>
            <div className='grid justify-items-center mb-4'>
                <button className="btn btn-active btn-accent">Add to cart</button>
            </div>
        </div>
    );
};

export default Info;