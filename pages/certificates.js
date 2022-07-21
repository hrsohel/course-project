import React from 'react';
import UserMenu from '../components/UserMenu';
import courseImg from '../public/Courses/drug-free-zone-sign-o 1.png'
import Link from 'next/link'
import Image from 'next/image'

const certificates = () => {
    return (
        <>
           <main className='flex items-start justify-center p-4'>
                <UserMenu active="certificates"/>
                <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <h1 className='font-bold text-white text-2xl'>Certificates</h1>
                    </div>
                    <div className='p-4'>
                        <div className="card flex items-center justify-center">
                            <Image src={courseImg} width="250" height="180"/>
                            <div className='w-full bg-blue-200 rounded-r-2xl p-4'>
                                <h2 className='text-blue-500 text-2xl font-bold'>Drug Free Training</h2>
                                
                                <div className='flex items-center justify-between'>
                                    <p className='text-gray-500 text-2xl font-bold'>Score: 50%</p>
                                    <Link href="" ><span className='hover:bg-hoveSideBac hover:text-hovSideText my-4 text-center block w-40 ml-auto font-bold border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full cursor-pointer'>Print</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </main> 
        </>
    );
};

export default certificates;