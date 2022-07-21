import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/master admin/icon/Supervisor Solutions Logo for header.png'
import _demo from '../public/User profile/292982759_988887001808470_1252588350587099212_n.png'
const demo = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-blue-300 to-blue-500 w-full  flex items-center  justify-between">
             <div>
               <Image 
                src={logo}
                width={320} 
                height={120}
                className= "cursor-pointer shadow-xl"
               /> 
             </div>
            
             <div className='flex items-center justify-center'>
                <div className="header-nav px-10 text-2xl font-semibold"> 
                <nav className="text-slate-50">
                    <ul className="flex space-x-8  ">
                    <li className=" hover:text-[#231955] "><a href="#">Courses</a></li>
                    <li className=" hover:text-[#231955]  "><a href="#">Cart</a></li>
                    <li className=" hover:text-[#231955]  "><a href="#">User</a></li>
                    </ul>  
                </nav>
                </div>               
        
                <Image src={_demo} className='absolute top-0 left-0 object-cover' width="" height="150"/>
             </div>
          </div>
        </>
    );
};

export default demo;