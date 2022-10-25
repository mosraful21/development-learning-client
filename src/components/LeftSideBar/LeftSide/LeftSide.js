import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaLinkedin } from "react-icons/fa";

const LeftSide = () => {

    return (
        <div className='w-4/5 m-auto mt-12'>
            <div className='grid mb-10'>
                <button className="btn btn-outline btn-accent mb-2"> <FaGoogle className='mx-2'></FaGoogle> Login with Google</button>
                <button className="btn btn-outline btn-success"> <FaGithub className='mx-2'></FaGithub> Login with GitHub</button>
            </div>
            <div className='grid'>
                <h2 className='text-2xl mb-2'>Find us on</h2>
                <button className="btn mb-2"> <FaFacebook className='mx-2'></FaFacebook> facebook</button>
                <button className="btn mb-2"> <FaTwitter className='mx-2'></FaTwitter> Twitter</button>
                <button className="btn mb-2"> <FaWhatsapp className='mx-2'></FaWhatsapp> WhatsApp</button>
                <button className="btn mb-2"> <FaTwitch className='mx-2'></FaTwitch> Twitch</button>
                <button className="btn mb-2"> <FaLinkedin className='mx-2'></FaLinkedin> Linkedin</button>
            </div>
        </div>
    );
};

export default LeftSide;