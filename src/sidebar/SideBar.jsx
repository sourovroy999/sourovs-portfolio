import { BaggageClaim, Contact, Contact2, List, UserRound, Workflow } from 'lucide-react';
import React from 'react';
import { FaList, FaListUl } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const SideBar = () => {
    return (
        <div className='mt-6 ml-20'>
            <div className='flex  flex-col gap-0 w-[60px] uppercase '>

                <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                        `bg-white  flex flex-col gap-1 text-[8px] justify-center  items-center py-3 border-b ${isActive ? "text-amber-400" : "text-black hover:text-amber-400"}`
                    }
                >
                
                
                
                    <div >
                        <UserRound size={18}  className=''/>
                    </div>

                    <p >

                        About
                    </p>
                </NavLink>

                <NavLink
                    to={'/resume'}
                    className={({ isActive }) =>
                        `bg-white flex flex-col text-[8px] justify-center gap-1 items-center py-3 border-b ${isActive ? "text-amber-400" : "text-black hover:text-amber-400"}`
                    }
                >

                    <div>
                        <List size={18} />
                    </div>

                    <p >

                        Resume
                    </p>
                </NavLink>



                   <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                        `bg-white flex flex-col text-[8px] justify-center gap-1 items-center py-3 border-b ${isActive ? "text-amber-400" : "text-black hover:text-amber-400"}`
                    }
                >
                    <div>
                        <Workflow size={18} />
                    </div>
                    Projects
                </NavLink>
                   <NavLink
                    to={'/blogs'}
                    className={({ isActive }) =>
                        `bg-white flex flex-col text-[8px] justify-center gap-1 items-center py-3 border-b ${isActive ? "text-amber-400" : "text-black hover:text-amber-400"}`
                    }
                >
                    <div>
                        <BaggageClaim size={18}/>
                    </div>
                    Blogs
                </NavLink>
            </div>



        </div>
    );
};

export default SideBar;