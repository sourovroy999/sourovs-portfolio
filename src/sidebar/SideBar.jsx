import React from 'react';
import { Link } from 'react-router';

const SideBar = () => {
    return (
        <div className='mt-6 ml-20'>
            <div className='flex  flex-col gap-4'>
                <Link to={'/about'} className='btn text-white w-18 bg-blue-400'>
                    About
                </Link>
                <Link to={'/projects'} className='btn text-white w-18 bg-blue-400'>
                    Projects
                </Link>
                <Link to={'/blogs'} className='btn w-18 text-white bg-blue-400'>
                    Blogs
                </Link>
            </div>


            
        </div>
    );
};

export default SideBar;