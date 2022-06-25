import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import dashboardPic from '../public/master admin/icon/8679880_dashboard_fill_icon.png'
import EMPic from '../public/master admin/icon/211633_calendar_icon.png'
import InsPic from '../public/master admin/icon/309041_users_group_people_icon.png'
import coursePic from '../public/master admin/icon/6590551_and_books_education_learning_library_icon (2).png'
import feesPic from '../public/master admin/icon/172506_money_icon.png'
const Menu = () => {
    return (
        <>
            <ul className='Category p-4 w-1/3 hidden md:block bg-blue-900 text-2xl text-white font-semibold'>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={dashboardPic} width="30rem" height="30rem" /><Link href="dashboard" className='ml-3'>Dashboard</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={EMPic} width="30rem" height="30rem" /><Link href="event-management">Event Management</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={InsPic} width="30rem" height="30rem" /><Link href="instructor">Instructor</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={InsPic} width="30rem" height="30rem" /><Link href="students">Students</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={coursePic} width="30rem" height="30rem" /><Link href="courses">Courses</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={InsPic} width="30rem" height="30rem" /><Link href="employess">Employees</Link></li>
                    <li className='my-4 flex items-center'><Image className='mr-4' src={feesPic} width="30rem" height="30rem" /><Link href="fees">Fees</Link></li>
            </ul>
        </>
    );
};

export default Menu;