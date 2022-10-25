import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("error : ", error);
            })
    }

    return (
        <div class="grid grid-cols-4 gap-4">

            <div class="w-4/5 mx-auto mt-12">
                <div className='grid mb-10'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mb-2"> <FaGoogle className='mx-2'></FaGoogle> Login with Google</button>
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

            <div class="col-span-3 grid grid-cols-3 gap-4 mt-12">
                {
                    courses.map(course => <div key={course.id}>
                        <div className='grid justify-items-center border-2'>
                            <Link to={`${course.id}`}>
                                <img className='w-64 h-64' src={course.logo} alt="" />
                                <h2 className='text-3xl grid justify-items-center border m-4 rounded-xl'>{course.name}</h2>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;