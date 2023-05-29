import Image from 'next/image';
import React from 'react';
import dev_img from '@/assets/images/dev.png';
import atomic_img from '@/assets/images/atomic.png';
import dev2 from '@/assets/images/dev2.png';
import dev3 from '@/assets/images/dev3.png';

const ReadMore = () => {
  return (
    <div className='read-more-container'>
      <div className='content'>
        <div className='border-l-4 border-secondary px-3 mb-12'>
          <h2 className='text-5xl capitalize pb-4'>
            Read <b>More</b> From Us
          </h2>
          <p className='leading-normal text-2xl text-slate-700 font-light'>
            Partnership announcements, news about the company or insightful
            articles from our team.
          </p>
        </div>

        <div className='business-development-container flex flex-col md:flex-row gap-8 border border-black'>
          <div className='w-full md:w-[50%] '>
            <Image src={dev_img} alt='ddev' className='object-cover' />
          </div>

          <div className='business-development-content space-y-1 flex-grow px-2 py-10'>
            <h3 className='text-pink-600 text-base font-bold'>
              Business Development
            </h3>
            <p className='font-thin text-lg'>22 May 2023</p>
            <h2 className='font-bold text-xl py-3'>
              15 MUST-HAVE PLUGINS & APPS FOR SHOPIFY STORES
            </h2>
            <p className='font-light text-lg pb-8'>
              Discover the essential plugins and apps that will transform your
              Shopify store into a thriving success.
            </p>
            <a
              href='#'
              className='px-5 py-4 font-bold bg-secondary transition-all duration-300 ease-in-out hover:bg-black hover:text-secondary'
            >
              Read More
            </a>
          </div>
        </div>
        {/* tutorial */}
        <div className='tutorial-container py-10'>
          {/* story post  */}
          <div className='business-development-container flex flex-col border border-black'>
            <div className='w-full'>
              <Image
                src={atomic_img}
                alt='ddev'
                className='hidden object-cover sm:block '
              />
            </div>

            <div className='business-development-content  flex-grow p-6 py-10'>
              <h3 className='text-pink-600 text-base font-bold'>Story Post</h3>
              <p className='font-thin text-lg'>22 May 2023</p>
              <h2 className='font-bold text-xl py-3 mb-5'>
                Apply Atomic Habits&lsquo; Principles to eCommerce & Digital
                Marketing
              </h2>

              <a
                href='#'
                className='px-5 py-4 font-bold bg-secondary transition-all duration-300 ease-in-out hover:bg-black hover:text-secondary'
              >
                Read More
              </a>
            </div>
          </div>
          {/* story post  */}
          <div className='business-development-container flex flex-col border border-black'>
            <div className='w-full'>
              <Image
                src={dev2}
                alt='ddev'
                className='hidden object-cover sm:block '
              />
            </div>

            <div className='business-development-content  flex-grow p-6 py-10'>
              <h3 className='text-pink-600 text-base font-bold'>Tutorials</h3>
              <p className='font-thin text-lg'>22 May 2023</p>
              <h2 className='font-bold text-xl py-3 mb-5'>
                Apply Atomic Habits&lsquo; Principles to eCommerce & Digital
                Marketing
              </h2>

              <a
                href='#'
                className='px-5 py-4 font-bold bg-secondary transition-all duration-300 ease-in-out hover:bg-black hover:text-secondary'
              >
                Read More
              </a>
            </div>
          </div>
          {/* story post  */}
          <div className='business-development-container flex flex-col border border-black'>
            <div className='w-full'>
              <Image
                src={dev3}
                alt='ddev'
                className='hidden object-cover sm:block '
              />
            </div>

            <div className='business-development-content  flex-grow p-6 py-10'>
              <h3 className='text-pink-600 text-base font-bold'>Story Post</h3>
              <p className='font-thin text-lg'>22 May 2023</p>
              <h2 className='font-bold text-xl py-3 mb-5'>
                Apply Atomic Habits&lsquo; Principles to eCommerce & Digital
                Marketing
              </h2>

              <a
                href='#'
                className='px-5 py-4 font-bold bg-secondary transition-all duration-300 ease-in-out hover:bg-black hover:text-secondary'
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className='text-center py-12'>
          <a
            href='#'
            className='px-8 py-5 font-bold border border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-secondary'
          >
            See All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
