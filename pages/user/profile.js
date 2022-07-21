import Image from 'next/image';
import React from 'react';
import UserMenu from '../../components/UserMenu';
import notify from '../../public/User profile/9035146_notifications_icon.png'
import user from '../../public/User profile/4781818_account_avatar_face_man_people_icon.png'

const profile = () => {
    return (
        <main className='flex items-start justify-center p-4'>
            <UserMenu active="profile"/>
            <div className='ml-2 w-full shadow-2xl rounded-b-lg'>
                <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                    <h1 className='font-bold text-white text-2xl'>My Profile</h1>
                    <Image src={notify} width="30" height="30"/>
                </div>
                <div className='flex items-center justify-evenly'>
                    <div className='flex items-center justify-evenly flex-col'>
                        <Image src={user} width="200" height="200"/>
                        <button className='hover:bg-hoveSideBac hover:text-hovSideText py-2 px-4 rounded-lg bg-blue-900 text-white font-bold text-2xl'>Edit Profile</button>
                    </div>
                    <div className='my-12'>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Student ID</h3>
                        <p className='my-4 text-gray-500 text-md'>N/A</p>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Full Name</h3>
                        <p className='my-4 text-gray-500 text-md'>John Smith</p>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Email Address</h3>
                        <p className='my-4 text-gray-500 text-md'>abc@gmail.com</p>
                        <h3 className='my-4 text-2xl text-blue-900 font-bold'>Phone</h3>
                        <p className='my-4 text-gray-500 text-md'>412545542542</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default profile;