'use client';
import React from 'react';
import CustomSwiper from './CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import story1 from '@/assets/images/story/story1.jpeg';
import story2 from '@/assets/images/story/story2.jpeg';
import story3 from '@/assets/images/story/story3.jpeg';
import story4 from '@/assets/images/story/story4.jpeg';
import story5 from '@/assets/images/story/story5.jpeg';
import story6 from '@/assets/images/story/story6.jpeg';
import story7 from '@/assets/images/story/story7.png';

const Story = () => {
  return (
    <div className='story-container py-24'>
      <div className='content'>
        <div className='border-l-4 border-secondary px-3 mb-12'>
          <h2 className='text-5xl capitalize pb-4'>
            Pass <b>Success</b> Stories
          </h2>
          <p className='leading-normal text-2xl text-slate-700 font-light'>
            Proven track record of our hard work.
          </p>
        </div>
        <CustomSwiper>
          <SwiperSlide className='story-swipe-slide'>
            <Image
              src={story1}
              alt='arrow'
              className='w-full h-full block object-contain'
            />
            <div className='swiper-slide-cover absolute inset-0 '>
              <a
                href='#'
                className='block font-bold  text-2xl tracking-normal text-black'
              >
                Aspazia
              </a>
              <a href='#'>Read More</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className='story-swipe-slide'>
            <Image
              src={story3}
              alt='arrow'
              className='w-full h-full block object-contain'
            />
            <div className='swiper-slide-cover absolute inset-0 '>
              <a
                href='#'
                className='block font-bold  text-2xl tracking-normal text-black'
              >
                Aspazia
              </a>
              <a href='#'>Read More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='story-swipe-slide'>
            <Image
              src={story4}
              alt='arrow'
              className='w-full h-full block object-contain'
            />
            <div className='swiper-slide-cover absolute inset-0 '>
              <a
                href='#'
                className='block font-bold  text-2xl tracking-normal text-black'
              >
                Aspazia
              </a>
              <a href='#'>Read More</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className='story-swipe-slide'>
            <Image
              src={story5}
              alt='arrow'
              className='w-full h-full block object-contain'
            />
            <div className='swiper-slide-cover absolute inset-0 '>
              <a
                href='#'
                className='block font-bold  text-2xl tracking-normal text-black'
              >
                Aspazia
              </a>
              <a href='#'>Read More</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className='story-swipe-slide'>
            <Image
              src={story7}
              alt='arrow'
              className='w-full h-full block object-contain'
            />
            <div className='swiper-slide-cover absolute inset-0 '>
              <a
                href='#'
                className='block font-bold  text-2xl tracking-normal text-black'
              >
                Aspazia
              </a>
              <a href='#'>Read More</a>
            </div>
          </SwiperSlide>
        </CustomSwiper>
      </div>
    </div>
  );
};

export default Story;
