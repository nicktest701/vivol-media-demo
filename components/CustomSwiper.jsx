'use client';

import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function CustomSwiper({ children }) {
  return (
    <Swiper
      className='custom-swiper'
      modules={[Autoplay, Pagination, Navigation, A11y, Scrollbar]}
      speed={1000}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2}
      loop
      autoplay={{
        delay: 2000,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        // enabled: false,
      }}
      // navigation={true}
    >
      {children}
    </Swiper>
  );
}
