import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../components/Menu';
import Navbar from './Navbar'
import img from '../public/master admin/icon/1564535_customer_user_userphoto_account_person_icon (1).png'

const students = () => {
    return (
        <>
            <Navbar />
           <main className='flex items-start justify-center bg-gray-200'>
                <Menu/>
                <div className="instructor w-full">
                    <h1 className='text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>
                        <Link href='students'>Students</Link>
                        <Link href='add-student'>Add Student</Link>
                        <Link href='edit-student'>Edit Student</Link>
                    </h1>
                    <div className='flex items-center justify-evenly p-4 flex-wrap'>
                        <div className="card w-80 rounded-md  bg-white">
                            <h2 className='text-center text-lg rounded-t-md py-3 font-bold mb-3 w-full ise'>John Smith</h2>
                            <div className='flex items-center justify-center'>
                                <Image className='block mx-auto' src={img} width='100rem' height='100rem' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Gender:</p>
                                    <p className="text-lg my-2">Phone No:</p>
                                    <p className="text-lg my-2">Admission Date:</p>
                                    <p className="text-lg my-2">Email:</p>
                                </div>
                                <div className='text-right'>
                                    <p className="text-lg my-2">Male</p>
                                    <p className="text-lg my-2">24564564515</p>
                                    <p className="text-lg my-2">3 May, 2022</p>
                                    <p className="text-lg my-2">abc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4 lg:my-0 w-80 bg-white rounded-md ">
                            <h2 className='text-center text-lg rounded-t-md py-3 font-bold mb-3 ise'>John Smith</h2>
                            <div className='flex items-center justify-center'>
                                <Image className='block mx-auto' src={img} width='100rem' height='100rem' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Gender:</p>
                                    <p className="text-lg my-2">Phone No:</p>
                                    <p className="text-lg my-2">Admission Date:</p>
                                    <p className="text-lg my-2">Email:</p>
                                </div>
                                <div>
                                    <p className="text-lg my-2">Male</p>
                                    <p className="text-lg my-2">24564564515</p>
                                    <p className="text-lg my-2">2 May, 2022</p>
                                    <p className="text-lg my-2">abc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-white w-80 rounded-md ">
                            <h2 className='text-center text-lg font-bold rounded-t-md py-3 mb-3 ise'>John Smith</h2>
                            <div className='flex items-center justify-center'>
                                <Image className='block mx-auto' src={img} width='100rem' height='100rem' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Gender:</p>
                                    <p className="text-lg my-2">Phone No:</p>
                                    <p className="text-lg my-2">Admission Date:</p>
                                    <p className="text-lg my-2">Email:</p>
                                </div>
                                <div>
                                    <p className="text-lg my-2">Male</p>
                                    <p className="text-lg my-2">24564564515</p>
                                    <p className="text-lg my-2">2 May, 2022</p>
                                    <p className="text-lg my-2">abc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default students;