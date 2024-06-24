import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import rightimg from '../../images/safari.png'
import Image from 'next/image';
function WhyChooseUs() {
    return (
        <div className='flex flex-wrap gap-4 px-7'>
            <div className='p-10 w-1/2'>
                <h2 className='text-7xl font-medium mb-2'>Why Choose Us?</h2>
                {/* <li ><h2 className='text-7xl font-medium mb-2'>Why Choose Us?</h2></li> */}
                <ul className='p-4 text-xl font-medium text-black '>
                    <li className='flex  items-center gap-1'><IoCheckmarkCircleOutline /> <p>Zero Deposit</p></li>
                    <li className='flex  items-center gap-1'><IoCheckmarkCircleOutline /> <p>Unlimited Kilometers</p></li>
                    <li className='flex  items-center gap-1'><IoCheckmarkCircleOutline /> <p>24/7 Breakdown Service</p></li>
                    <li className='flex  items-center gap-1'><IoCheckmarkCircleOutline /> <p>Choose Your Own Hours Starting From 6 Hours, Days, Weeks or Monthly Bookings</p></li>
                </ul>
            </div>
            {<Image
                className=''
                alt="Tata Nexon"
                src={rightimg}
                width={500}
                height={500}
            //   layout='fill'
            //   objectFit="cover"

            />}
        </div>
    )
}

export default WhyChooseUs