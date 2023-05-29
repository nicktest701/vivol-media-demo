import Image from 'next/image';
import wave from '@/assets/images/wave1.svg';

const ServiceItem = ({ children, icon, title }) => {
  return (
    <div className='service-item relative p-8 border border-black bg-white overflow-hidden cursor-pointer '>
      <Image
        src={wave}
        alt='wave'
        className='wave absolute -top-[65%] -right-48 transform  fill-primary '
      />
      <Image src={icon} alt='ico' className='w-12 h-12 object-contain mb-8' />
      <h2 className='text-4xl font-bold tracking-widest pb-8'>{title}</h2>
      {children}
      <div className='pt-12 pb-8'>
        <a href='#' className=' text-2xl underline hover:no-underline'>
          Interested? Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceItem;
