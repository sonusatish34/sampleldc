import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import styles from './HomePage.module.css'
import { FaSearch } from 'react-icons/fa';
import carphotot from '../../images/9.jpeg';
import whatsapp from '../../images/wsp.svg';
import phone from '../../images/call.svg';
import admin from '../../images/why.png';
import FaqAccordian from '../FaqAccordian/FaqAccordian'

export default function Homepage({ data }) {
  const [visibleItems, setVisibleItems] = useState(10); 
  const [searchQuery, setSearchQuery] = useState('');
  const backgroundImage = 'https://images.pexels.com/photos/9796251/pexels-photo-9796251.jpeg?auto=compress&cs=tinysrgb&w=600';
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 10); 
  };

  return (
    <div className=" min-h-screen">
      <div>
        <div className=' bg-cover h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='p-2 text-left'>
            <h2 className="px-1 pb-1 font-bold text-3xl" data-wow-delay="50ms" data-wow-duration="200ms">
              Zero Deposit</h2>
            <h2 className="px-1 font-bold text-3xl" data-wow-delay="50ms" data-wow-duration="200ms">
              Unlimited Kilometers</h2>
            <p className="p-1 font-semibold text-l" data-wow-delay="300ms" data-wow-duration="2000ms">
            </p>
            <button className='my-2 rounded-sm p-1 mb-52 bg-red-700'>Go to Listing</button>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='text-center mt-9'>
          <h2 className="px-3 font-bold text-3xl text-blue-950 mb-2">Explore Self Drive Car Rentals</h2>
        </div>
        <div className='mb-3 flex items-center justify-center'>
          <input
            placeholder='Search for the cars'
            className='placeholder-black text-black px-4 py-2 rounded-full w-full md:w-auto'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch className='text-blue-500 relative right-7' />
        </div>
        <div className='overflow-y-auto h-screen'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data?.slice(0, visibleItems).map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-72">
                  <Image
                    src={carphotot}
                    alt="Car"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="px-4 pt-3">
                  <div className='flex items-baseline justify-between text-lg font-semibold'>
                    <Link href={`/${item.maker_model}`}>
                      <p className=" font-normal text-gray-800 mb-2 cursor-pointer hover:underline">{item.maker_model}</p>
                    </Link>
                    <p className="text-blue-500 font-bold">₹{item.price_24_hours * 24}/day</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-300 pb-3 text-black font-normal text-base">
                    <div className="flex items-center">
                      <BsFuelPump className="mr-1 text-red-700" />
                      <span>{item.fuel_type}</span>
                    </div>
                    <div className="flex items-center">
                      <TbManualGearbox className="mr-1 text-blue-500" />
                      <span>{item.transmission_type}</span>
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAirlineSeatReclineExtra className="mr-1" />
                      <span>{item.seater}</span>
                    </div>
                  </div>

                  <div className='flex justify-around'>
                    <button className='w-14 h-12 flex justify-center text-green-500 items-center gap-1'>
                      <Link href="https://api.whatsapp.com/send?phone=8886161974" target='_blank'>
                        <Image
                          src={whatsapp}
                          alt="Car"
                          height={120}
                          className="rounded-t-lg object-contain max-w-none"
                        />
                      </Link>
                    </button>
                    <button className='w-14 h-12 flex justify-center text-green-500 items-center gap-1'>
                      <Link href="https://api.whatsapp.com/send?phone=8886161974" target='_blank'>
                        <Image
                          src={phone}
                          alt="Car"
                          height={120}
                          className="rounded-t-lg object-contain max-w-none"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {visibleItems <= data?.length && (
          <div className="text-center mt-4 mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}
      </div>

      <div className=''>
        <Image
          src={admin}
          alt="admin"
          // layout="fill"
          // objectFit="cover"
          className="rounded-t-lg"
        />
        {/* hiiii */}
      </div>

      <div className='p-1 bg-gray-100 text-black m- rounded shadow-md'>
        <h2 className='uppercase p-2  text-left font-semibold text-lg'>Frequently asked questions</h2>
        <FaqAccordian />
      </div>

      {/* <div className='bg-gray-700 text-white py-2 text-center'>
        © Self Drive Cars Hyderabad All Rights Reserved.
      </div> */}

    </div>
  );
}

