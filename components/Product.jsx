import Image from 'next/image';
import product from '@/assets/images/product.webp';

export const Product = () => {
  return (
    <section id='work' className='bg-[#131517] text-white  py-20'>
      <div className='content flex flex-col md:flex-row justify-center items-center gap-10  '>
        <div className='flex flex-col justify-between gap-6  flex-1'>
          <h2 className='text-3xl tracking-wide pb-2'>
            Your Success Is Our Success
          </h2>
          <p className='text-lg leading-normal tracking-wide font-thin'>
            We love working with amazing brands and we are fully invested in all
            of our projects.
          </p>
          <p className='text-lg leading-normal tracking-wide font-light'>
            Our ethos is to provide quality above all else and we uphold our
            beliefs when offering our services to our clients.
          </p>
          <p className='text-lg leading-normal tracking-wide font-light'>
            We’ve been a part of many success stories and we can’t wait to join
            your journey to the top!
          </p>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-8 text-black transition-all duration-500 ease-in-out '>
            <div className='bg-secondary px-3 py-4 text-center self-start  w-2/3'>
              <p className='text-2xl font-semibold '>20+</p>
              <p className='text-lg font-normal tracking-wide'>
                Successful Launches
              </p>
            </div>
            <div className='bg-secondary px-3 py-4 text-center self-end w-2/3'>
              <p className='text-2xl font-semibold '>35+</p>
              <p className='text-lg font-normal tracking-wide'>
                Ongoing Customers
              </p>
            </div>
            <div className='bg-secondary px-3 py-4 text-center self-start w-2/3'>
              <p className='text-2xl font-semibold '>100+</p>
              <p className='text-lg font-normal tracking-wide'>
                Ideas Implemented
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <Image
            src={product}
            alt='product image'
            className='product-image max-w-full max-h-full block '
          />
        </div>
      </div>
    </section>
  );
};
