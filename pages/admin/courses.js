import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from '../../components/Menu';
import Navbar from './Navbar'
import img1 from '../../public/master admin/images/drug-free-zone-sign-o 1.png'

const courses = () => {
    return (
        <div>
            <Navbar />
           <main className='flex items-start justify-center bg-gray-200'>
                <Menu/>
                <div className="instructor w-full">
                    <h1 className='text-sm text-white text-center p-3 sm:text-2xl font-bold bg-blue-900'>
                        <Link href='courses'>Courses</Link>
                        <Link href='add-course'>Add Course</Link>
                        <Link href='edit-course'>Edit Course</Link>
                    </h1>
                    <div className='flex items-center justify-evenly p-4 flex-wrap'>
                        <div className="card w-80 rounded-md  bg-white">
                            <h2 className='text-center text-lg rounded-t-md py-3 font-bold w-full ise'>Drug Free Working Place Training</h2>
                            <div className=''>
                                <Image className='w-full h-full' src={img1} width='' height='' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Duration:</p>
                                    <p className="text-lg my-2">Instructor:</p>
                                    <p className="text-lg my-2">Students:</p>
                                    <p className="text-lg my-2">Ratings:</p>
                                </div>
                                <div className='text-right'>
                                    <p className="text-lg my-2">3 Months</p>
                                    <p className="text-lg my-2">John Smith</p>
                                    <p className="text-lg my-2">1500</p>
                                    <p className="text-lg my-2">5 Stars</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-80 rounded-md  bg-white">
                            <h2 className='text-center text-lg rounded-t-md py-3 font-bold w-full ise'>Drug Free Working Place Training</h2>
                            <div className=''>
                                <Image className='w-full h-full' src={img1} width='' height='' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Duration:</p>
                                    <p className="text-lg my-2">Instructor:</p>
                                    <p className="text-lg my-2">Students:</p>
                                    <p className="text-lg my-2">Ratings:</p>
                                </div>
                                <div className='text-right'>
                                    <p className="text-lg my-2">3 Months</p>
                                    <p className="text-lg my-2">John Smith</p>
                                    <p className="text-lg my-2">1500</p>
                                    <p className="text-lg my-2">5 Stars</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-80 rounded-md  bg-white">
                            <h2 className='text-center text-lg rounded-t-md py-3 font-bold w-full ise'>Drug Free Working Place Training</h2>
                            <div className=''>
                                <Image className='w-full h-full' src={img1} width='' height='' />
                            </div>
                            <div className='flex items-center justify-between px-3 mt-8'>
                                <div>
                                    <p className="text-lg my-2">Duration:</p>
                                    <p className="text-lg my-2">Instructor:</p>
                                    <p className="text-lg my-2">Students:</p>
                                    <p className="text-lg my-2">Ratings:</p>
                                </div>
                                <div className='text-right'>
                                    <p className="text-lg my-2">3 Months</p>
                                    <p className="text-lg my-2">John Smith</p>
                                    <p className="text-lg my-2">1500</p>
                                    <p className="text-lg my-2">5 Stars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default courses;