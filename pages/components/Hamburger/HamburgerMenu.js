import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/sdc.png';
import logo2 from '../../images/newlog.png';
import { LuPhoneCall } from 'react-icons/lu';
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <mainhead>
        <div className="p-1 ">
        </div>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText}>
            Zero Deposit Unlimited Kilometers<div></div>
          </div>
        </div>
      </mainhead>
      <subhead>
        <div className="bg-gray-800 flex justify-between  text-white text-base p-2">
          <h2 className='lg:text-2xl lg:font-bold'>For Booking Help</h2>
          <div className="flex items-center gap-1">
            <h2><LuPhoneCall size={15} /></h2>
            <h2 className='lg:text-2xl lg:font-bold'>9000-478-478</h2>
          </div>
        </div>
      </subhead>

      <div className="flex items-center justify-between bg-white p-3 border-2 border-orange-200 lg:h-20">
        <div className="flex justify-end">
          <Image
            src={logo}
            alt="carrr"
            width={200}
            height={100}
          />
        </div>
        <div>
          <button
            ref={buttonRef}
            className="lg:hidden block relative right-1 bottom-0 text-orange-400"
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

        <nav
          ref={menuRef}
          className={`${isOpen ? 'block overflow-auto' : 'overflow-hidden'} w-2/3 h-screen absolute top-0 left-0 z-10 transition-transform delay-4000 ease-out bg-opacity-95 bg-blue-400`}
          style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
        >
          <Image
            className="w-16 h-16 ml-9 mt-3"
            src={logo2}
            alt="carrr"
            width={129}
            height={130}
          />
          <ul className="ml-4 mt-5 pl-5 pt-4 font-semibold flex flex-col gap-3 bg-s items-start text-white">
            <li className="underline w-32 text-start"><Link href={'/'}>Home</Link></li>
            <li className="underline w-32 text-start"><Link href={''}>Contact</Link></li>
            <li className="underline w-32 text-start"><Link href={''}>Blog</Link></li>
            <li className="underline w-32 text-start"><Link href={''}>Reviews</Link></li>
          </ul>
          <div className="flex flex-col text-left gap-2 p-6 justify-center mt-32 text-white">
            <p>For Booking Help Call</p>
            <div className="flex items-center text-white">
              <ul className="">
                <li>Telangana, AP</li>
                <li className="font-bold text-2xl">9000-478-478</li>
              </ul>
            </div>
            <div className="flex items-center text-white">
              <ul className="">
                <li>Bangalore</li>
                <li className="font-bold text-2xl">912-912-25-25</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;

