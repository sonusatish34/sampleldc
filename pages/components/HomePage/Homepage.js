import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
// import { LuPhoneCall } from 'react-icons/lu';
import Link from 'next/link';
import { TiArrowRightOutline } from "react-icons/ti";
import FaqAccordian from '../FaqAccordian/FaqAccordian'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

// import logo from '../images/logocar.jpg';
import carphotot from '../../images/3.jpeg';
import whatsapp from '../../images/wsp.svg';
import phone from '../../images/call.svg';
import backgroundImage from '../../images/Admin-Login.png';
import Carousal from '../ReviewCarousal/Carousal';
import HamburgerMenu from '../Hamburger/HamburgerMenu';

export default function Homepage({ data }) {

  // console.log(data, "hhh");
  // const [imageCache, setImageCache] = useState({});
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const backgroundImage = 'https://images.pexels.com/photos/9796251/pexels-photo-9796251.jpeg?auto=compress&cs=tinysrgb&w=600';
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query
  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = filteredData?.slice(startIndex, endIndex);
  return (
    <div className="bg-blue-200  min-h-screen overflow-hidden" >

      <div className=' bg-cover md:h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className="py-3 px-6 bg-blue-500 mx-3 rounded-b-md">
          <HamburgerMenu />
        </header>

        <div className='md:text-left mt-40'>
          {/* <h2 className='mt-7 p-5 font-bold text-lg underline'>Trusted Dealer, Rental</h2> */}

          <h2 className="px-5 font-bold text-5xl" data-wow-delay="50ms" data-wow-duration="200ms">
            Luxury and addordable Car Collection..</h2>
          <p className="p-5 font-semibold text-l" data-wow-delay="300ms" data-wow-duration="2000ms">
            Car is where early adopters and innovation seekers find lively
            imaginative tech before it hits the mainstream.</p>
          <button className='ml-5 rounded-sm p-2 mb-52 bg-red-700'>Go to Listing</button>
        </div>
      </div>

      <div>
        <div className='text-center mt-9 py-7'>
          <h2 className="p-3 font-bold text-4xl text-black">Explore all Vehicles</h2>
          <input
            placeholder='Search for the cars'
            className='w-80 text-red-500 p-1 border border-red-500 rounded-md'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {displayedItems?.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden m-2">
                <div>
                  <button className='rounded-sm px-4 py-1 lg:relative bg-red-500 absolute right-4 mt-2 z-10'>{item.manufacture_date}2023</button>
                </div>
                <div className="relative w-full h-72 border-blue-200">
                  <Image
                    src={carphotot}
                    alt="Car"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className='flex items-baseline justify-between text-xl font-semibold'>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href={`/${item.maker_model}`}>
                      <p className="text-xl font-semibold text-gray-800 mb-2">{item.maker_model}</p>
                    </Link>
                    {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.maker_model}</h2> */}
                    <p className="text-blue-500 font-bold mb-3">₹{item.price_24_hours * 24}/day</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-300 pb-3 text-black font-normal text-base">
                    <div className="flex items-center ">
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
                    <button className='p-2 flex justify-center text-green-500 items-center gap-1'>
                      <Image
                        src={whatsapp}
                        alt="Car"
                        // layout="fill"
                        // objectFit="contain"
                        width={100}
                        height={50}
                        className="rounded-t-lg object-contain"
                      />
                    </button>
                    <div>
                      <button className='p-2 flex justify-center text-blue-500 items-center gap-1'>
                        <Image
                          src={phone}
                          alt="Car"
                          // layout="fill"
                          objectFit="contain"
                          width={100}
                          height={100}
                          sizes='11px'
                          className="rounded-t-lg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2 items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="text-gray-700">{`Page ${page} of ${totalPages}`}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
              onClick={() => setPage(prevPage => Math.min(prevPage + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>


      <div className='p-5 bg-gray-100 text-black m-3 rounded'>
        {/* <h2 className='text-orange-700'>ReviewsSlider </h2> */}
        <Carousal />

      </div>
      <div className='p-5 bg-gray-100 text-black m-3 rounde shadow-md'>
        {/* <h2 className='text-orange-700'>ReviewsSlider </h2> */}
        <h2 className='uppercase p-2'> /// Frequently asked questions</h2>
        <FaqAccordian />
      </div>


      <footer className="flex flex-col bg-gray-800 text-white p-4">

        <div>
          <h2 className='text-left p-6 text-lg font-bold'>Booking help lines</h2>
          <div className='flex text-left gap-2 p-6 justify-center'>
            <div className='flex items-center justify-center'>
              <LuPhoneCall size={40} />
              <ul className='ml-2'>
                <li>Telangana, AP</li>
                <li>9000-0008</li>
              </ul>
            </div>
            <div className='flex items-center justify-center'>
              <LuPhoneCall size={40} />
              <ul className='ml-2'>
                <li>Bangalore</li>
                <li>9000-000908</li>
              </ul>
            </div>

          </div>
        </div>
        <div className='text-left bg-gray-900 mt-4 p-4'>
          <div>
            <h2 className='font-bold text-lg py-2 underline'>Our Branches</h2>
            <ul>
              <li>Medipally</li>
              <li>Dilshuknagar</li>
              <li>Medipally</li>
              <li>Dilshuknagar</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-lg py-2 underline'>Useful Links</h2>
            <ul>
              <li><Link href={'/'}>Blog</Link></li>
              <li><Link href={'/'}>Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-lg pt-2 underline'>Head Office</h2>
            <ul>
              <li><h3 className='font-semibold text-base text-blue-500 uppercase'>Location</h3></li>
              <li><p>Long Drive Cars, Pillar No 129, Main Road, beside Medipally,
                Medipally, Hyderabad, Telangana 500098
              </p></li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-lg py-2 underline'>Social media links</h2>
            <ul>
              <li><Link href={'/'}>Blog</Link></li>
              <li><Link href={'/'}>Contact us</Link></li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  );
}
