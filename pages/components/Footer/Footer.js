import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaSearch, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <footer className="flex flex-col bg-gray-800 text-white p-4">
                <div>
                    <h2 className='text-left pl-4 pb-3 text-lg font-bold'>Booking help lines</h2>
                    <div className='flex flex-col text-left pl-2 gap-2'>
                        <div className='flex items-center'>
                            <ul className='ml-2'>
                                <li>Telangana, AP</li>
                                <li className=' text-3xl'>9000-478-478</li>
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <ul className='ml-2'>
                                <li>Bangalore</li>
                                <li className=' text-3xl'>912-912-25-25</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-left mt-4 p-4'>

                    <div>
                        <h2 className='font-bold text-lg py-2 underline'>Useful Links</h2>
                        <ul>
                            <li><Link href={'/'}>Blog</Link></li>
                            <li><Link href={'/'}>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className='pb-2 border-b-4 border-blue-200'>
                        <h2 className='font-bold text-lg pt-2 pb-2 underline'>Head Office</h2>
                        <ul>
                            <li><h3 className='font-semibold text-base text-blue-500 pb-1 uppercase'>Location</h3></li>
                            <li><p>Long Drive Cars, Pillar No 129, Main Road, beside Medipally,
                                Medipally, Hyderabad, Telangana 500098
                            </p></li>
                        </ul>
                    </div>
                    <div>

                        <ul className='flex items-start py-3 gap-5'>
                            {/* <li><h1 className=''>@longdrivecars</h1></li> */}
                            <li className='text-blue-400'><FaFacebook size={35} /></li>
                            <li className='text-blue-400'><FaInstagram size={35} /></li>
                            <li className='text-blue-400'><FaTwitter size={35} /></li>
                            <li className='text-blue-400'><FaYoutube size={35} /></li>

                        </ul>
                    </div>
                </div>

            </footer>
        </div>
    )
}
export default Footer