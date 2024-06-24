import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import tata from '../../images/tata2.jpg';
import skoda from '../../images/skoda1.jpg';
import toyota from '../../images/toyota1.jpg';
import mg from '../../images/mg.png';
import kia from '../../images/kia.jpg';
import mahindra from '../../images/mahindra.png';
import suzuki from '../../images/suzuki1.jpg';
import carphotot from '../../images/9.jpeg';
import whatsapp from '../../images/wsp.svg';
import phone from '../../images/call.svg';
import admin from '../../images/why.png';
import FaqAccordian from '../FaqAccordian/FaqAccordian';
import styles from './HomePage.module.css';

export default function Homepage({ data }) {
  const [visibleItems, setVisibleItems] = useState(9);
  const [searchQuery, setSearchQuery] = useState('');
  const backgroundImage = 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/3-0-csl/bmw-3-0-csl-mi-02.jpg.asset.1669308608803.jpg';

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 9);
  };

  const replaceText = (str) => {
    return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls', 'https://d12t7i0duidj85.cloudfront.net');
  };

  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div>
        <div className='h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='pl-20  pt-10 text-left'>
            <h2 className="px-1 pb-3 font-bold md:text-5xl" data-wow-delay="50ms" data-wow-duration="200ms">
              Zero Deposit
            </h2>
            <h2 className="px-1 pb-7 font-bold md:text-4xl" data-wow-delay="50ms" data-wow-duration="200ms">
              Unlimited Kilometers
            </h2>
            <button className='my-2 rounded-lg p-2 mb-52 bg-blue-700 text-white md:text-lg'>Go to Listing</button>
          </div>
        </div>
      </div>
      <div className='bg-[#f2f5fb] flex flex-col justify-center items-center gap-y-6 py-20'>
        <div>
          <p className='underline text-red-700 font-bold text-xl'>FIND YOUR CARS BY BRAND</p>
          <p className='py-3 text-7xl text-black'>Browse By Brand</p>
        </div>
        <div className='brands flex justify-center items-center flex-wrap p-6 gap-3 text-black lg:w-max container'>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col hover:scale-110 hover:border border-blue-300'>
            <Image
              src={mahindra}
              alt="Car"
              width={180}
              height={180}
              className="rounded"
            />
            <p className='pt-2 font-bold'>Mahindra</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col gap-y-7 hover:scale-110 hover:border border-blue-300'>
            <Image
              src={toyota}
              alt="Car"
              width={110}
              height={180}
              className="rounded"
            />
            <p className='font-bold'>Toyota</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col gap-y-7 hover:scale-110 hover:border border-blue-300'>
            <Image
              src={kia}
              alt="Car"
              width={180}
              height={180}
              className="rounded"
            />
            <p className='pt-2 font-bold'>Kia</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col hover:scale-110 hover:border border-blue-300'>
            <Image
              src={suzuki}
              alt="Car"
              width={120}
              height={100}
              className="rounded"
            />
            <p className='font-bold'>Suzuki</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col hover:scale-110 hover:border border-blue-300'>
            <Image
              src={tata}
              alt="Car"
              width={170}
              height={180}
              className="rounded"
            />
            <p className='pt-2 font-bold'>Tata</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col hover:scale-110 hover:border border-blue-300'>
            <Image
              src={mg}
              alt="Car"
              width={180}
              height={180}
              className="rounded"
            />
            <p className='pt-2 font-bold'>MG</p>
          </div>
          <div className='p-2 bg-white rounded-sm w-40 h-52 flex justify-center items-center flex-col hover:scale-110 hover:border border-blue-300'>
            <Image
              src={skoda}
              alt="Car"
              width={100}
              height={100}
              className="rounded"
            />
            <p className='pt-2 font-bold'>Skoda</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-0 bg-white'>
        <div className='text-center'>
          <h2 className="px-3 font-bold text-2xl pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9">Explore Self Drive Car Rentals</h2>
        </div>
        <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center'>
          <input
            placeholder='Search for the cars'
            className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full max-w-56 md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
        <div className='flex items-center justify-center py-6'>
          <div className="flex flex-wrap gap-x-8 gap-y-8 items-center justify-center lg:max-w-5xl">
            {filteredData?.slice(0, visibleItems).map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-72 h-96 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={replaceText(item?.car_image_car_right_view)}
                    alt="Car"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="px-2 pt-4 flex flex-col gap-4 p-1">
                  <div className='flex items-baseline justify-around'>
                    <Link href={`/${item.maker_model}`}>
                      <p className="text-gray-800 cursor-pointer font-bold hover:text-red-600 w-fit">{item.maker_model}</p>
                    </Link>
                    <p className="text-blue-500 font-bold">₹{item.price_24_hours * 24}/day</p>
                  </div>
                  <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base">
                    <div className="flex items-center">
                      <BsFuelPump size={15} className="mr-1" />
                      <span>{item.fuel_type}</span>
                    </div>
                    <div className="flex items-center">
                      <TbManualGearbox size={15} className="mr-1" />
                      <span>{item.transmission_type}</span>
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                      <span>{item.seater}</span>
                    </div>
                  </div>

                  <div className='flex justify-around gap-2'>
                    <button className='w-14 h-12 flex justify-center text-green-500 items-center gap-1'>
                      <Link href="https://api.whatsapp.com/send?phone=" target='_blank'>
                        <Image
                          src={whatsapp}
                          alt="Car"
                          height={100}
                          className="rounded-t-lg object-contain max-w-none lg:h-44"
                        />
                      </Link>
                    </button>
                    <button className='w-14 h-12 flex justify-center text-green-500 items-center gap-1'>
                      <Link href="tel:7989030741" target='_blank'>
                        <Image
                          src={phone}
                          alt="Car"
                          height={100}
                          className="rounded-t-lg object-contain max-w-none lg:h-44"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {visibleItems < filteredData?.length && (
           <div className="text-center pb-10">
           <button
             className="bg-blue-500 text-lg font-bold text-white px-9 py-2 rounded-full"
             onClick={handleLoadMore}
           >
             Load more
           </button>
         </div>
        )}
      </div>
      <div className='bg-blue-100'>
        <div className='p-14'>
          <Image
            src={admin}
            alt="admin"
            // layout="fill"
            // objectFit="cover"
            className="rounded-t-lg"
          />
          {/* hiiii */}
        </div>
      </div>

      <div className='bg-white text-black rounded shadow-md py-12'>
        <h2 className='uppercase p-2 mb-4  text-center font-bold text-3xl'>Frequently asked questions</h2>
        <FaqAccordian />
      </div>
    </div>
  );
}

// Po ra
