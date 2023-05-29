'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import a from '@/assets/images/company/a.webp';
import b from '@/assets/images/company/b.svg';
import c from '@/assets/images/company/c.svg';
import d from '@/assets/images/company/d.webp';
import e from '@/assets/images/company/e.webp';
import f from '@/assets/images/company/f.webp';
import g from '@/assets/images/company/g.webp';
import h from '@/assets/images/company/h.webp';

export default function Company() {
  return (
    <Swiper
      className='company-swiper bg-gray-400'
      modules={[Autoplay, Pagination, Navigation, A11y, Scrollbar]}
      speed={1000}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={3}
      loop
      autoplay={{
        delay: 2000,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        enabled: false,
      }}
      // navigation={true}
    >
      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={a} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>

      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={d} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>
      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={e} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>
      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={f} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>
      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={g} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>
      <SwiperSlide className='company-swiper-slide p-2'>
        <Image src={h} alt='arrow' className='w-full h-full object-contain' />
      </SwiperSlide>
    </Swiper>
  );
}
