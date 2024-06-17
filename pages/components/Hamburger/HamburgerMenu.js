// components/HamburgerMenu.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/newlog.png'
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center  justify-between">
      <div>
        <Image
          className='rounded-full p-1 h-24'
          src={logo}
          alt="carrr"
          width={100}
          height={100}
        />
      </div>
      <div>
        <button
          className="block lg:hidden absolute right-5 top-8"
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

      <nav className={`${isOpen ? 'block overflow-auto ' : 'overflow-hidden '} text-red-600 w-2/3 absolute top-0 left-0 h-full z-10 transition-transform  delay-4000  ease-out bg-opacity-95 bg-blue-400`} style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}>
      
        <Image
          className='rounded-full p-1 ml-3 h-32'
          src={logo}
          alt="carrr"
          width={129}
          height={300}
        />
        <ul className='ml-4 mt-5 text-black pl-5 pt-4 font-semibold flex flex-col gap-1 bg-s items-start'>
          <li><Link href={''}>Home</Link></li>
          <li><Link href={''}>Contact</Link></li>
          <li><Link href={''}>Blog</Link></li>
          <li><Link href={''}>Reviews</Link></li>
        </ul>
      </nav>

      {/* <button className='text-orange-500 mx-8' onClick={()=>{
        setIsOpen(!isOpen)
      }}>close</button> */}
    </div>
  );
};

export default HamburgerMenu;
