import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/master admin/icon/Supervisor Solutions Logo for header.png'
import user from '../../public/master admin/icon/1564535_customer_user_userphoto_account_person_icon (1).png'
const Navbar = () => {
    return (
        <>
           <header className='flex items-center justify-between w-full md:p-4 flex-wrap'>
                <div className="mx-auto" className="logo">
                    <Image style={{objectFit: "cover"}} className='' src={logo} />
                </div>
                <form className='p-1 my-4 mx-auto rounded-full bg-blue-900 flex items-center justify-center' action="">
                    <input className='bg-blue-900 text-white rounded-full outline-none p-1 text-lg' type="search" name="" id="" placeholder='Search'/>
                    <button className='w-6 h-6 search-btn mr-2 text-lg'></button>    
                </form>
                <div className="user flex items-center justify-center">
                    <Image src={user}/>
                    <p className="text-lg ml-3 font-bold">User</p>    
                </div>   
            </header> 
        </>
    );
};

export default Navbar;