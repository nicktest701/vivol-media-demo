import React from 'react';
import Image from 'next/image';
import clutch_img from '@/assets/images/clutch.svg';
import home_blob_black from '@/assets/images/black.svg';
import home_blob_green from '@/assets/images/green.svg';

const Hero = () => {
  return (
    <section
      id='hero'
      className='hero-container relative bg-primary flex items-center justify-center h-[100vh] overflow-hidden'
    >
      <div className='content z-[1] flex flex-col gap-2'>
        <p className='text-secondary text-xl tracking-wider uppercase p-2'>
          Europe Based
        </p>
        <p className='font-extrabold text-center text-3xl w-full text-white tracking-wide leading-normal pt-4 md:w-1/2 md:text-6xl md:text-left'>
          Shopify Experts You Can Trust
        </p>
        <p className='w-full text-base text-center md:text-left font-thin text-white tracking-wider py-4 md:w-[65%] md:text-2xl '>
          We are Shopify partners and experienced developers,so you can be sure
          you are in great hands!
        </p>

        <a
          href='#'
          className='max-w-sm whitespace-nowrap self-center md:self-start bg-white text-xl font-bold tracking-wide px-10 py-4 my-8 hover:bg-secondary transition duration-150 ease-linear'
        >
          Let&lsquo;s Work Together
        </a>

        <Image src={clutch_img} alt='clutch' className='w-24 h-24' />
      </div>
      <Image
        src={home_blob_black}
        alt='home_blob_black'
        className='absolute -top-[40%] -left-[40%] '
      />
      <Image
        src={home_blob_green}
        alt='home_blob_green'
        className='absolute -bottom-[40%] -right-[40%] '
      />
    </section>
  );
};

export default Hero;
