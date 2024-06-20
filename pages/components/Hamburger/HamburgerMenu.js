import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/sdc.png'
import logo2 from '../../images/newlog.png'
import { LuPhoneCall } from 'react-icons/lu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <mainhead >
        <div className='bg-orange-600 p-1 w-screen'>
          <div className="flex space-x-6 animate-loop-scroll">
            <span className='text-orange-600' >.......</span>
            <p>Zero Deposit </p>
            <p>Unlimited Kilometers</p>
          </div>
        </div>
      </mainhead>
      <subhead >
        <div className=' bg-gray-800 w-screen flex justify-between p-2 lg:text-2xl p-4 '>
          <h2>For Booking Help</h2>
          <div className='flex items-center gap-1'>
            <h2><LuPhoneCall size={15} /></h2>
            <h2> 9000-478-478</h2>
          </div>
        </div>
      </subhead>

      <div className="flex items-center justify-between bg-white p-3 border-2 border-orange-200">
        <div className='flex justify-end'>
          <Image
            src={logo}
            alt="carrr"
            width={150}
            height={100}
          />
        </div>
        <div>
          <button
            className="block relative right-1 bottom-0 text-orange-400 "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 fill-current text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>

        <nav className={`${isOpen ? 'block overflow-auto ' : 'overflow-hidden '}  w-2/3 h-screen absolute top-0 left-0  z-10 transition-transform  delay-4000  ease-out bg-opacity-95 bg-blue-400`} style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}>

          <Image
            className='w-16 h-16 ml-9 mt-3'
            src={logo2}
            alt="carrr"
            width={129}
            height={130}
          />
          <ul className='ml-4 mt-5 pl-5 pt-4 font-semibold flex flex-col gap-3 bg-s items-start text-white'>
            <li className='underline w-32 text-start'><Link href={'/'}>Home</Link></li>
            <li className='underline w-32 text-start'><Link href={''}>Contact</Link></li>
            <li className='underline w-32 text-start'><Link href={''}>Blog</Link></li>
            <li className='underline w-32 text-start'><Link href={''}>Reviews</Link></li>
          </ul>
          <div className='flex flex-col text-left gap-2 p-6 justify-center mt-32 text-white'>
            <p>For Booking Help Call </p>
            <div className='flex items-center text-white'>
              {/* <LuPhoneCall size={40} /> */}
              <ul className=''>
                <li>Telangana, AP</li>
                <li className='font-bold text-2xl'>9000-478-478</li>
              </ul>
            </div>
            <div className='flex items-center text-white'>
              {/* <LuPhoneCall size={40} /> */}
              <ul className=''>
                <li>Bangalore</li>
                <li className='font-bold text-2xl'>912-912-25-25</li>
              </ul>
            </div>

          </div>
        </nav>

        {/* <button className='text-orange-500 mx-8' onClick={()=>{
        setIsOpen(!isOpen)
      }}>close</button> */}
      </div>
    </div>
  );
};

export default HamburgerMenu;
