import Image from 'next/image';
import React from 'react';

const Touch = () => {
  return (
    <div className='touch-container py-16'>
      <div className='content relative '>
        <div className='text-white pb-4'>
          <h2 className='text-5xl capitalize font-normal '>Let&lsquo;s Work Together</h2>
          <p className='leading-normal text-2xl py-8 font-light'>
            Book a free consultation with one of our team members now
          </p>

          <a
            href='#'
            className='bg-secondary text-black font-bold my-3 py-4 px-8 hover:bg-transparent hover:text-secondary transition-all duration-300 ease-linear'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Touch;
