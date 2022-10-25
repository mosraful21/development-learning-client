import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

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
    const handleGithubSignIn = () => {
        signInWithGitHub()
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

            <div class="w-4/5 mx-auto mt-10">
                <div className='grid mb-10'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mb-2"> <FaGoogle className='mx-2'></FaGoogle> Login with Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-success"> <FaGithub className='mx-2'></FaGithub> Login with GitHub</button>
                </div>
                <h2 className='text-2xl text-center text-white'>All Courses</h2>
                <hr /> <br />
                {
                    courses.map(course => <div key={course.id}>
                        <div>
                            <Link to={`${course.id}`}>
                                <button className="btn mb-2 w-full">
                                    {course.name}
                                </button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>

            <div class="col-span-3 lg:grid grid-cols-3 gap-4 mt-10 mr-10">
                {
                    courses.map(course => <div key={course.id}>
                        <div className='grid justify-items-center border-2 mb-8 rounded-lg'>
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