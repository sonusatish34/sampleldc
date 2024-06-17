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

export default function Homepage() {
  // const [data, setData] = useState(null);

  const data = [
    {
      "maker_model": "HYUNDAI AURA",
      "car_owner_id": 5,
      "car_number": "TS28Q1467",
      "price_24_hours": 77,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_072c12e6d8544e419a0810ba0fb4bff6.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Blue"
    },
    {
      "maker_model": "MARUTHI BALENO",
      "car_owner_id": 9,
      "car_number": "TS05FC6005",
      "price_24_hours": 83,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_c593f80b31a2480c97ca0f4b1ee58f0a.jpeg",
      "fuel_type": "Diesel",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "SWIFT DZIRE",
      "car_owner_id": 10,
      "car_number": "AP40F8748",
      "price_24_hours": 83,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_fd7bc4ad998b455eb6aee0340e2ccd3d.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "MARUTHI BALENO",
      "car_owner_id": 11,
      "car_number": "AP39SZ5981",
      "price_24_hours": 83,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_283b24dfb3df4ba28109e79c5459d196.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Blue"
    },
    {
      "maker_model": "MARUTHI CELERIO",
      "car_owner_id": 15,
      "car_number": "TS02FJ0970",
      "price_24_hours": 62,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_4f7672ec27554e10b0ffe6f562709d47.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Red"
    },
    {
      "maker_model": "TATA TIAGO",
      "car_owner_id": 17,
      "car_number": "TS08JU9831",
      "price_24_hours": 74,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_125df67ec8014c8ab66bdf1e2c5ee151.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "MARUTHI BALENO",
      "car_owner_id": 21,
      "car_number": "TS08JR1106",
      "price_24_hours": 83,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_f81e62db71504e5f8a76cfc8709bc109.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Red"
    },
    {
      "maker_model": "MARUTHI WAGON R",
      "car_owner_id": 24,
      "car_number": "TS29M8477",
      "price_24_hours": 62,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_eaa9c7a132094e208006e4241979c193.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "MARUTHI WAGON R",
      "car_owner_id": 26,
      "car_number": "TS08GN6324",
      "price_24_hours": 62,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_c7c67b21b9fe491a86cb4fdec738aeed.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "MARUTHI BALENO",
      "car_owner_id": 28,
      "car_number": "TS02FG2811",
      "price_24_hours": 83,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_956f1167e708405fae674df15ff83146.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Blue"
    },
    {
      "maker_model": "MAHINDRA THAR",
      "car_owner_id": 29,
      "car_number": "TS18H4569",
      "price_24_hours": 208,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_f57987a01ce04bf5bf09472e1ce7b95a.jpeg",
      "fuel_type": "Diesel",
      "transmission_type": "Manual",
      "seater": "4",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "HYUNDAI I20",
      "car_owner_id": 33,
      "car_number": "TS08JW6180",
      "price_24_hours": 91,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_fee0890802fb4150929befca3e3cfa16.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Red"
    },
    {
      "maker_model": "MARUTHI ERTIGA",
      "car_owner_id": 34,
      "car_number": "TS08JX1166",
      "price_24_hours": 116,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_17490e1651214dd7a01a8a2d060c3066.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "7",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "RENAULT KIGER",
      "car_owner_id": 36,
      "car_number": "TS07JN9077",
      "price_24_hours": 74,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_7d3b3f7bef064b30a58e940c54e5d218.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Maroon"
    },
    {
      "maker_model": "MARUTHI CELERIO",
      "car_owner_id": 39,
      "car_number": "TS07JK1688",
      "price_24_hours": 62,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_3f3b75666030454085caaf409359c820.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "SWIFT AUTOMATIC",
      "car_owner_id": 41,
      "car_number": "TS08JW3174",
      "price_24_hours": 77,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_aaba7f4ad2944612a2e43872b11d7180.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Automatic",
      "seater": "5",
      "vehicle_color": "Grey"
    },
    {
      "maker_model": "HYUNDAI I20",
      "car_owner_id": 43,
      "car_number": "TS08JT7376",
      "price_24_hours": 91,
      "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_4e6bbd0ff2494d2790d74ab6308e965d.jpeg",
      "fuel_type": "Petrol",
      "transmission_type": "Manual",
      "seater": "5",
      "vehicle_color": "Black"
    }
  ]
  //   async function fetchData() {
  //     const myHeaders = new Headers();
  //     myHeaders.append('accept', 'application/json');

  //     const requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow',
  //     };

  //     const response = await fetch(
  //       `https://longdrivecarz.in/site/cars-info?location=Hyderabad`,
  //       requestOptions
  //     );
  //     const responseData = await response.json();
  //     const fs = responseData?.data?.results;
  //     setData(fs);
  //     console.log(fs,'fss');
    
  //   }
  //   fetchData();
  // }, []);
  console.log(data, "hhh");
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

      <div className=' w-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className="py-3 px-6 bg-blue-500 mx-3 rounded-b-md">
          <HamburgerMenu />
        </header>

        <div>
          {/* <h2 className='mt-7 p-5 font-bold text-lg underline'>Trusted Dealer, Rental</h2> */}

          <h2 className="px-5 font-bold text-5xl" data-wow-delay="50ms" data-wow-duration="200ms">
            Premium Car Collection..</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.maker_model}</h2>
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
                    <button classNam='p-2 flex justify-center text-green-500 items-center gap-1'>
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
                      <button classNae='p-2 flex justify-center text-blue-500 items-center gap-1'>
                        <Image
                          src={phone}
                          alt="Car"
                          // layout="fill"
                          objectFit="contain"
                          width={100}
                          height={100}
                          sizes='11px'
                          classNae="rounded-t-lg"
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
