import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaSearch, FaYoutube } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";


function Footer() {
    return (
        <div className='px-8 bg-gray-800'>
            <footer className="flex flex-wrap md:gap-x-24 justify-between gap-y-4 xl:gap-x-64 bg-gray-800 text-white p-4">
                <div>
                    <h2 className='text-left pl-4 pb-3 text-lg font-bold'>Booking help lines</h2>
                    <div className='fl  ex flex-col text-left gap-2'>
                        <div className='flex items-center'>
                            <ul className='ml-2'>
                                <li>Telangana, AP</li>
                                <li className=' text-xl'><span><FiPhone size={20} className='text-red-600 inline' /></span> 9000-478-478</li>
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <ul className='ml-2'>
                                <li>Bangalore</li>
                                <li className=' text-xl'><span><FiPhone size={20} className='text-red-600 inline' /></span> 912-912-25-25</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-left'>

                    <div>
                        <h2 className='font-bold text-lg'>Useful Links</h2>
                        <ul>
                            <li><Link href={'/'}>Blog</Link></li>
                            <li><Link href={'/'}>Contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='pb-2'>
                    <h2 className='font-bold text-lg'>Head Office</h2>
                    <ul>

                        <li className='w-48'> <span><IoLocationSharp size={20} className='text-red-600 inline' /></span> <p className='inline'> Long Drive Cars, Pillar No 129, Main Road, beside Medipally,
                            Medipally, Hyderabad, Telangana 500098
                        </p></li>
                    </ul>
                </div>
            </footer>
            <div>
                <ul className='flex flex-wrap items-center justify-between py-5 gap-5 text-white flex-grow'>
                    <li>© selfdrivecars all rights reserved</li>
                    <li className='flex gap-6'>

                    <p className='hover:text-blue-500 cursor-pointer'><FaFacebook size={35} /></p>
                    <p className='hover:text-pink-500 cursor-pointer'><FaInstagram size={35} /></p>
                    <p className='hover:text-blue-300 cursor-pointer'><FaTwitter size={35} /></p>
                    <p className='hover:text-red-500 cursor-pointer'><FaYoutube size={35} /></p>
                    </li>
                    <li className='flex gap-5 font-medium text-lg'>
                        <p className='hover:text-blue-500 cursor-pointer'>Privacy & Policy</p>
                        <p className='hover:text-blue-500 cursor-pointer'>Blog</p>
                        <p className='hover:text-blue-500 cursor-pointer'> Policy</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Footer