import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div class="grid grid-cols-3 gap-4 mt-12">
            {
                categories.map(category => <div key={category.id}>
                    <div className='grid justify-items-center border-2'>
                        <Link to={`${category.id}`}>
                            <img className='w-64 h-64' src={category.logo} alt="" />
                            <h2 className='text-3xl grid justify-items-center'>{category.name}</h2>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Courses;