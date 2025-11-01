import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import SideBar from '../sidebar/SideBar';
import cartoon from '../assets/crtn.jpeg'
import Profile from './Profile';

const MainLayout = () => {
    return (
        <div className='pt-10'>
            {/* <Navbar /> */}

            <div className='flex '>

                <div>
                    <SideBar />
                </div>
                {/* <div className='ml-20 '>
                    i am sourov roy
                    <img className='w-20 h-20 rounded-full' src={cartoon} alt="" />
                </div> */}
                <Profile/>
                <div className='ml-20 border-2 w-[300px] mt-10 p-3'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;