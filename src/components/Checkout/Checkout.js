import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const Checkout = () => {
    const checkout = useLoaderData();
    const handleBuyNow = () => {
        swal("Payment option will be added very soon");
    }
    const handleNotNow = () => {
        swal("Ok, Please try later");
    }

    return (
        <div className='w-4/5 m-auto mt-12 border'>
            <h1 className='text-3xl text-center font-semibold mt-4'>Course ID: {checkout.id}</h1>
            <img className='w-48 h-48 m-auto' src={checkout.image} alt="" />
            <h2 className='text-2xl text-center font-semibold mt-4'>Course Name: {checkout.title}</h2>
            <p className='text-center font-semibold mt-4'>Price: {checkout.price}</p>
            <div className='flex justify-center gap-8 mt-10 mb-4'>
                <button onClick={handleBuyNow} className="btn btn-success w-48">Buy Now</button>
                <button onClick={handleNotNow} className="btn btn-warning w-48">Not now!!</button>
            </div>
        </div>
    );
};

export default Checkout;