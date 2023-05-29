import React from 'react';
import star from '@/assets/images/star.svg';
import Image from 'next/image';

const Star = () => {
  return (
    <div className='flex gap-1 justify-center lg:justify-start items-center  py-5'>
      <Image src={star} alt='star' className='w-5 h-5' />
      <Image src={star} alt='star' className='w-5 h-5' />
      <Image src={star} alt='star' className='w-5 h-5' />
      <Image src={star} alt='star' className='w-5 h-5' />
      <Image src={star} alt='star' className='w-5 h-5' />
    </div>
  );
};

export default Star;
