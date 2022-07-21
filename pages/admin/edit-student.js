import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Menu from '../../components/Menu';

const editStudent = () => {
    return (
        <>
           <Navbar />
           <main className='flex items-start justify-center bg-gray-200'>
               <Menu active="student"/>
                <div className='instructor w-full'>
                    <h1 className='text-white text-center p-3 text-2xl font-bold bg-blue-900'>
                        <Link href='students'>Students</Link>
                        <Link href='add-student'>Add Student</Link>
                        <Link href='edit-student'>Edit Student</Link>
                    </h1>
                    <form className='w-full p-4' action="">
                        <h2 className='text-2xl font-bold text-blue-600'>Basic Info</h2>
                        <div className='flex items-center justify-between w-full flex-wrap'>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="fname">First Name</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="fname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="lname">Last Name</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="lname" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="email">Eamil</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="email" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="jponDate">Admission Date</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="jponDate" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="password">Password</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="" id="password" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="cpassword">Confirm Password</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="password" name="" id="cpassword" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="mobile">Mobile Number</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="number" name="" id="mobile" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="gender">Gender</label>
                                <select name="" id="gender" className='block outline-none border-2 border-black p-2 text-lg rounded-md'>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="designation">Student ID</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="designation" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="department">Address</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="department" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="dob">Date of Birth</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="date" name="" id="dob" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="education">Education</label>
                                <input className='block outline-none border-2 border-black p-2 text-lg rounded-md' type="text" name="" id="education" />
                            </div>
                            <div className='md:w-4/12'>
                                <label className='block my-3 text-lg font-semibold' htmlFor="image">Upload Image</label>
                                <input className='' type="file" name="" id="image" />
                            </div>
                            
                        </div>
                        <input className='bg-blue-600 my-4 rounded-md py-2 px-4 text-white text-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </main> 
        </>
    );
};

export default editStudent;