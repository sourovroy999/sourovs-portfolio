import React from 'react';
import upimg from '../assets/naturewater.jpeg'
import cartoon from '../assets/crtn.jpeg'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { IoMdCloudDownload } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";








const Profile = () => {
    return (
        <div className='ml-10 relative'>
            <div className='w-[360px] rounded-2xl h-[500px] shadow-2xl'>
                <img className='w-[360px] rounded-t-2xl ' src={upimg} alt="" />

                <div className=' items-center  flex flex-col justify-center'>
                    <img className='w-20 h-20 rounded-full -mt-6' src={cartoon} alt="" />
                    <div className='text-2xl font-semibold my-1'>
                        Sourov roy
                    </div>

                    <div className=''>


                        <ReactTyped
                            strings={[
                                "Front end developer",
                                "Programmer",
                                "Webflow developer",
                            ]}
                            typeSpeed={60}
                            backSpeed={70}
                            attr="placeholder"
                            loop
                        >
                            <input type="text" className="text-center border-none outline-none bg-transparent  " />
                        </ReactTyped>

                    </div>
                    <div className='flex gap-3 my-3'>
                        <FaLinkedin className='' />

                        <FaGithub />
                        <FaXTwitter />
                    </div>

                </div>

                <div className='w-full border-t grid grid-cols-2 text-center px-2 mb-6 py-3 absolute bottom-0   '>

                    <div className='flex justify-center items-center gap-2 hover:text-amber-300 '>Download Cv 
                        <IoMdCloudDownload className='text-xl '/>
                    </div>
                    <div className='flex justify-center items-center gap-2 hover:text-amber-300 '>Contact me <RiContactsBook2Fill/> </div>
                </div>



            </div>
        </div>
    );
};

export default Profile;