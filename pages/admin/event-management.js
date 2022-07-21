import React, {useState} from 'react';
import Menu from '../../components/Menu';
import Navbar from './Navbar';
import Image from 'next/image'
import pending from '../../public/master admin/icon/Ellipse 34.png'
import urgent from '../../public/master admin/icon/Ellipse 33.png'
import event from '../../public/master admin/icon/Ellipse 32.png'
import release from '../../public/master admin/icon/Ellipse 31.png'
import Category from '../../components/Category';

const eventManagement = () => {
    const [show, setShow] = useState(false)
    return (
        <>
           <Navbar/>
           <main className='flex items-start justify-start bg-gray-300'>
                <Menu />
                <div className="event w-full">
                <h1 className='bg-blue-900 w-full text-center text-white text-2xl py-4 font-bold'>Event Management</h1>
                <div className='bg-white m-4'>
                    <div className='flex items-center justify-between p-4'>
                        <h1 className="text-2xl font-bold">June</h1>
                        <h1 className="text-2xl font-bold">2021</h1>
                    </div>
                    <div className="responsive p-4 my-3">
                            <table className='w-full text-center'>
                                <thead>
                                    <tr className='text-2xl'>
                                        <th className='text-red-500'>SUN</th>
                                        <th>MON</th>
                                        <th>TUE</th>
                                        <th>WED</th>
                                        <th>THU</th>
                                        <th>FRI</th>
                                        <th className='text-red-500'>SAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='font-bold'>
                                        <td className='text-gray-400 py-8 border-2 text-2xl border-black'>30</td>
                                        <td className='text-gray-400 py-8 border-2 text-2xl border-black'>31</td>
                                        <td className=' py-8 border-2 border-black text-2xl'>1</td>
                                        <td className=' py-8 border-2 border-black text-2xl'>2</td>
                                        <td className=' py-8 border-2 border-black text-2xl'>3</td>
                                        <td className=' py-8 border-2 border-black text-2xl'>4</td>
                                        <td className=' py-8 border-2 border-black text-2xl'>5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex items-start justify-between my-3 p-4'>
                            <div>
                                <p className='text-gray-600 flex items-center font-semibold my-3'><Image src={release} width="25rem" height="25rem" /> <span className='ml-2'>New Theme Release</span> </p>
                                <p className='text-gray-600 flex items-center font-semibold my-3'><Image src={event} width="25rem" height="25rem" /> <span className='ml-2'>My Event</span> </p>
                                <p className='text-gray-600 flex items-center font-semibold my-3'><Image src={urgent} width="25rem" height="25rem" /> <span className='ml-2'>Urgent</span> </p>
                                <p className='text-gray-600 flex items-center font-semibold my-3'><Image src={pending} width="25rem" height="25rem" /> <span className='ml-2'>Pending</span> </p>
                            </div>
                            <button onClick={() => setShow(!show)} className='text-center p-4 text-white font-semibold bg-blue-500 rounded-md'>+ Create New</button>
                        </div>
                        {
                            show ? <Category show={show} setShow={setShow} /> : ""
                        } 
                    </div>     
                </div> 
                
            </main> 
        </>
    );
};

export default eventManagement;