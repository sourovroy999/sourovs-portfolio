import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import SideBar from '../sidebar/SideBar';
import cartoon from '../assets/crtn.jpeg'
import Profile from './Profile';

const MainLayout = () => {
    return (
        <div className='pt-10 bg-base-300 h-[100vh] '>
            {/* <Navbar /> */}

            <div className='flex '>

                <div className=''>
                    <SideBar />
                </div>
                {/* <div className='ml-20 '>
                    i am sourov roy
                    <img className='w-20 h-20 rounded-full' src={cartoon} alt="" />
                </div> */}
                <div className='hidden'>

                <Profile />
                </div>
                <div className='ml-20 w-[540px] bg-white rounded-2xl  h-[90vh]  overflow-y-auto vertical-scroll mt-0 p-6 '>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;