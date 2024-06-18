// components/HamburgerMenu.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/newlog.png'
import { LuPhoneCall } from 'react-icons/lu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <Image
          className=' w-10 h-10'
          src={logo}
          alt="carrr"

        />
      </div>
      <div>
        <button
          className="block lg:hidden absolute right-10 top-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 fill-current text-gray-700"
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

      <nav className={`${isOpen ? 'block overflow-auto ' : 'overflow-hidden '}  w-2/3 absolute top-0 left-0 h-full z-10 transition-transform  delay-4000  ease-out bg-opacity-95 bg-blue-400`} style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}>

        <Image
          className='w-16 h-16 ml-9 mt-3'
          src={logo}
          alt="carrr"
          width={129}
          height={300}
        />
        <ul className='ml-4 mt-5 text-black pl-5 pt-4 font-semibold flex flex-col gap-3 bg-s items-start'>
          <li className='border border-b-black w-32 text-start'><Link href={''}>Home</Link></li>
          <li className='border border-b-black w-32 text-start'><Link href={''}>Contact</Link></li>
          <li className='border border-b-black w-32 text-start'><Link href={''}>Blog</Link></li>
          <li className='border border-b-black w-32 text-start'><Link href={''}>Reviews</Link></li>
        </ul>
        <div className='flex flex-col text-left gap-2 p-6 justify-center mt-36 text-black'>
          <div className='flex items-center'>
            <LuPhoneCall size={40} />
            <ul className='ml-2'>
              <li>Telangana, AP</li>
              <li>9000-0008</li>
            </ul>
          </div>
          <div className='flex items-center'>
            <LuPhoneCall size={40} />
            <ul className='ml-2'>
              <li>Bangalore</li>
              <li>9000-000908</li>
            </ul>
          </div>

        </div>
      </nav>

      {/* <button className='text-orange-500 mx-8' onClick={()=>{
        setIsOpen(!isOpen)
      }}>close</button> */}
    </div>
  );
};

export default HamburgerMenu;
