'use client';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerBg, setHeaderBg] = useState('bg-transparent');
  const [hideMenu, setHideMenu] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    function onScroll() {
      if (window.scrollY > 20) {
        setHeaderBg('bg-primary');
      } else {
        setHeaderBg('bg-transparent');
      }
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={` text-white fixed top-0 w-full z-10 transition duration-500 ease-in-out ${headerBg}`}
    >
      <div className='content  flex justify-between items-center '>
        <a href='#hero'>
          <Image
            src={logo}
            alt='logo'
            className='w-1/3 h-1/3 object-contain cursor-pointer'
          />
        </a>
        <div className='hidden md:flex justify-center items-center gap-12 pr-16'>
          <a href='#services' className='nav-link'>
            Services
          </a>
          <a href='#work' className='nav-link'>
            Our Work
          </a>
        </div>
        <div
          className='burger w-10 space-y-2 flex flex-col justify-end items-end cursor-pointer'
          onClick={() => setHideMenu(false)}
        >
          <span className=' w-7'></span>
          <span className=' w-10'></span>
          <span className='w-5'></span>
        </div>

        <div
          className={`menu-container transition duration-300 ease-in-out ${
            hideMenu ? 'hidden' : ''
          } absolute inset-0 z-50 w-full h-[100vh] bg-primary opacity-95 flex flex-col items-center justify-center overflow-hidden`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-12 h-12 absolute top-0 right-0 mt-5 mr-12 cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:rotate-45'
            onClick={() => setHideMenu(true)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>

          <ul className='flex flex-col gap-5 text-center'>
            <li className='sidebar-nav-link'>
              <a href='#'>Services</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>Service Plans</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>Our Works</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>About Us</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>Contact us</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>Blog</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>FAQ</a>
            </li>
            <li className='sidebar-nav-link'>
              <a href='#'>Strategic Partnerships</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
