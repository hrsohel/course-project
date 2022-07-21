import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserMenu from '../components/UserMenu'
import courseImg from '../public/Courses/drug-free-zone-sign-o 1.png'
const courses2 = () => {
    return (
        <>
          <main className='flex items-start justify-center p-4'>
              <UserMenu active="courses"/>
              <div className='w-full ml-2 shadow-2xl rounded-b-lg'>
                    <div className='p-2 flex items-center justify-between bg-blue-900 rounded-t-lg'>
                        <h1 className='font-bold text-white text-2xl'>Courses</h1>
                    </div>
                    <div className='p-4'>
                        <div className="card flex items-center justify-center">
                            <Image src={courseImg} width="450" height="455"/>
                            <div className='bg-blue-200 rounded-r-2xl p-4'>
                                <h2 className='text-blue-500 text-2xl font-bold'>Drug Free Training</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, atque illum. Asperiores consequuntur enim illo voluptatum quibusdam corporis, in ullam. Repellendus rem quod mollitia reiciendis maxime, molestias velit possimus porro?</p>
                                <br />
                                <p>Progress</p>
                                <div className='flex items-center justify-between'>
                                    <div className='mt-2 relative w-11/12 h-4 bg-gray-500 rounded-full'>
                                        <div className='rounded-full w-6/12 h-full absolute left-0 top-0 bg-blue-500'></div>
                                    </div>
                                    <p>50%</p>
                                </div>
                            </div>
                        </div>
                        <Link href="" ><span className='hover:bg-hoveSideBac hover:text-hovSideText my-4 block w-40 ml-auto font-bold border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full cursor-pointer'>+ Add Course</span></Link>
                    </div>
              </div>
            </main>  
        </>
    );
};

export default courses2;