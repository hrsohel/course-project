import React, { useState } from 'react';
import UserMenu from '../../components/UserMenu';

const settings = () => {
    const [showPassForm, setShowPassForm] = useState(false)
    const [showPrivForm, setShowPrivForm] = useState(false)
    return (
        <>
            <main className='flex items-start justify-center p-4'>
                <UserMenu active="settings"/>
                <div className='ml-2 w-full shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <h1 className='font-bold text-white text-2xl'>Settings</h1>
                    </div>
                    <div className='flex items-center justify-around py-4'>
                        <button onClick={() => setShowPassForm(!showPassForm)} className='px-4 hover:bg-hoveSideBac hover:text-hovSideText text-white py-2 text-center text-lg bg-hoveSideBac rounded-full'>Change Password</button>
                        <button className='px-4 hover:bg-hoveSideBac hover:text-hovSideText text-white py-2 text-center text-lg bg-hoveSideBac rounded-full'>Profile Privacy</button>
                    </div>
                    {
                        showPassForm ? <form action="" className='w-6/12 p-4'>
                        <label htmlFor="oldP" className='text-lg'>Old Password</label>
                        <input type="password" name="" id="oldP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Old Password'/>
                        <label htmlFor="newP" className='text-lg'>New Password</label>
                        <input type="password" name="" id="newP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='New Password'/>
                        <label htmlFor="ENewP" className='text-lg'>Enter New Password Again</label>
                        <input type="password" name="" id="ENewP" className='text-lg w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3' placeholder='Enter New Password Again'/>
                        <input type="submit" className='text-lg cursor-pointer hover:bg-hoveSideBac hover:text-hovSideText w-full my-2 outline-none border-2 border-hoveSideBac rounded-lg p-3'value="Submit"/>
                    </form> : ""
                    }
                </div>
            </main>
        </>
    );
};

export default settings;