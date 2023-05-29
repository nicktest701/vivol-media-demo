import React from 'react';
import Content from './Content';
import ServiceItem from './ServiceItem';
import Image from 'next/image';
import arrow from '@/assets/images/arrow.svg';
import shopify from '@/assets/images/shopify.svg';
import code from '@/assets/images/code.svg';

const Service = () => {
  return (
    <section id='services' className='py-24'>
      <div className='content'>
        <div className='border-l-4 border-secondary px-3'>
          <h2 className='text-5xl capitalize pb-4'>
            Experience The <b>Right</b> Way
          </h2>
          <p className='leading-normal text-2xl text-slate-700 font-light'>
            You deserve high quality services from the people who know thier
            stuff.We know our stuff that&lsquo;s a promise!
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-12 py-12'>
          <ServiceItem icon={shopify} title='Shopify Services'>
            <p className=' pb-8 text-xl  text-slate-600 tracking-normal'>
              From Shopify store setup to custom themes and apps - we&lsquo;ve
              got your back. We understand how Shopify works and we know how to
              make it work for your business!
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Free Consultation</span>
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Fast Delivery</span>
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Focused on Reusability and Flexibility</span>
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Custom Solutions</span>
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Affordable MVP</span>
            </p>
            <p className='service-list-item'>
              <Image src={arrow} alt='arrow' className='arrow' />
              <span>Ongoing Maintenance & Support</span>
            </p>
          </ServiceItem>
          <ServiceItem icon={code} title='Bespoke Development'>
            <div>
              <p className=' pb-8 text-xl  text-slate-600 tracking-normal'>
                Expose your work to the right audience with bespoke design and
                web solutions. Our dedicated team can conduct web creation at
                any degree of difficulty, from definition to finished results.
              </p>
              <p className='service-list-item'>
                <Image src={arrow} alt='arrow' className='arrow' />
                <span>Architecture & Solutions</span>
              </p>
              <p className='service-list-item'>
                <Image src={arrow} alt='arrow' className='arrow' />
                <span>Project Management</span>
              </p>
              <p className='service-list-item'>
                <Image src={arrow} alt='arrow' className='arrow' />
                <span>Testing & QA</span>
              </p>
              <p className='service-list-item'>
                <Image src={arrow} alt='arrow' className='arrow' />
                <span>Project Integration</span>
              </p>
              <p className='service-list-item'>
                <Image src={arrow} alt='arrow' className='arrow' />
                <span>Ongoing Maintenance & Support</span>
              </p>
            </div>
          </ServiceItem>
        </div>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <p className=' text-2xl tracking-wide font-light'>Oh, and we can do much more than that!</p>
          <a href='#' className='bg-secondary font-bold py-4 px-8 hover:shadow-md transition-all duration-300 ease-linear'>
            Find Out More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
