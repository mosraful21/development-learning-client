import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import swal from 'sweetalert';

const Register = () => {
    const { createUser, signInWithGoogle, signInWithGitHub, userProfile } = useContext(AuthContext);
    console.log("createUser", createUser);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                handleUserProfile(name, photoURL);
                form.reset();
                navigate('/courses');
            })
            .catch((error) => {
                console.error("error : ", error);
            })
    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfile(profile)
            .then(() => { })
            .catch((error) => {
                console.error("error : ", error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/courses');
                swal("Successfully login");
            })
            .catch((error) => {
                swal("Wrong Password!");
            })
    }

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(() => {
                navigate('/courses');
                swal("Successfully login");
            })
            .catch((error) => {
                swal("Wrong Password!");
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='fullName' placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='flex justify-evenly mb-3'>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                        </div>
                        <div>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline btn-success">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;