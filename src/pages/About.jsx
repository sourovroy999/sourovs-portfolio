import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { RiHtml5Fill } from 'react-icons/ri';

const About = () => {
    return (
        <div className='font-lekton '>
            <div className='font-semibold text-[#323232]'>
                <span className='text-orange-300'>A</span>bout Me
            </div>
            <hr className='my-6'/>
            <div>
            <span className='font-semibold text-gray-500 '>Hello! I’m Donald Wellborn.</span>
          
            <div className='text-[#646464] text-[14px]'>

Back-end & Front-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.
       
            <div className='grid grid-cols-2 mt-4'>
                <div>
                    Age....45
                </div>
                <div>
                    Residence....UK
                </div>
                <div>
                   Freelance....Available
                </div>
                <div>
                   Address....London, UK 
                </div>
            </div>
                 </div>

{/* Age 45
Residence UK
Freelance Available
Address London, UK */}
        </div>

{/* my services */}
        <div className='mt-6'>
                <div className='font-semibold text-[#323232]'>
                <span className='text-orange-300'>M</span>y Services
            <hr className='my-6'/>
            </div>


            <div>
                <div className='grid grid-cols-2 gap-6'>

                    <div className='  space-y-3' >
                        <div className='border w-fit p-4 rounded-full text-amber-500'>

                        <FaHtml5 className=' text-4xl'/>
                        </div>

                           <div className='font-semibold text-[#323232]'>Front-end</div>
                        <div className='text-[14px]'>
                            Modern and mobile-ready website that will help you reach all of your marketing.
                        </div>

                    </div>

                    <div className='  space-y-3' >
                        <div className='border w-fit p-4 rounded-full text-amber-500'>

                        <FaHtml5 className=' text-4xl'/>
                        </div>

                           <div className='font-semibold text-[#323232]'>Front-end</div>
                     <div className='text-[14px]'>
                            Modern and mobile-ready website that will help you reach all of your marketing.
                        </div>

                    </div>

                    <div className='  space-y-3' >
                        <div className='border w-fit p-4 rounded-full text-amber-500'>

                        <FaHtml5 className=' text-4xl'/>
                        </div>

                           <div className='font-semibold text-[#323232]'>Front-end</div>
                    <div className='text-[14px]'>
                            Modern and mobile-ready website that will help you reach all of your marketing.
                        </div>

                    </div>

                    <div className='  space-y-3' >
                        <div className='border w-fit p-4 rounded-full text-amber-500'>

                        <FaHtml5 className=' text-4xl'/>
                        </div>

                           <div className='font-semibold text-[#323232]'>Front-end</div>
                     <div className='text-[14px]'>
                            Modern and mobile-ready website that will help you reach all of your marketing.
                        </div>

                    </div>


                </div>
            </div>


        </div>
        </div>
    );
};

export default About;