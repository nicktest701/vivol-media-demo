import React from 'react';
import Star from './Star';

const Testimonials = () => {
  return (
    <section className='testimonial-container py-24'>
      <div className='content'>
        <div className='border-l-4 border-secondary px-3'>
          <h2 className='text-5xl capitalize pb-4'>
            We Work Hard To Ensure <b>Quality</b>
          </h2>
          <p className='leading-normal text-2xl text-slate-700 font-light'>
            And our clients appreciate it.
          </p>
        </div>

        <div className='testimonial-content flex flex-col justify-center items-center gap-10 py-20 '>
          {/* test1 */}
          <div className='testimonial-item  flex justify-center items-center gap-10  md:justify-start'>
            <div className='tc flex flex-col lg:flex-row justify-between items-center gap-5 border border-black p-10 leading-relaxed text-lg'>
              <div className='w-[40%] text-center lg:text-left'>
                <Star />
                <p className='whitespace-nowrap font-bold text-center lg:text-left'>
                  Aya Ahmad
                </p>
                <p className='whitespace-nowrap text-center lg:text-left'>
                  Founder - Fyne Jewellry
                </p>
              </div>
              <div className='text-center lg:text-right'>
                I can definitely say the team&lsquo;s communication was spot on.
                They care about their client&lsquo;s happiness and will work
                hard to meet expectations with a lot of patience and support.
              </div>
            </div>
            <div className='testimonial-link  hidden lg:block text-center text-xl font-normal'>
              <a href='' className='block whitespace-nowrap text-pink-600'>
                See Project
              </a>
              <a href='' className='block whitespace-nowrap text-pink-600'>
                Read Full Review
              </a>
            </div>
          </div>
          {/* test2 */}
          <div className='testimonial-item flex justify-center items-center gap-10  md:flex-row-reverse'>
            <div className='tc flex flex-col lg:flex-row justify-between items-center gap-5 border border-black p-10 leading-relaxed text-lg'>
              <div className='w-[40%] text-center lg:text-left'>
                <Star />
                <p className='whitespace-nowrap font-bold text-center lg:text-left'>
                  Rory O&lsquo;Neill
                </p>
                <p className='whitespace-nowrap text-center lg:text-left'>
                  Director, Lumired
                </p>
              </div>
              <div className='text-center lg:text-right'>
                Vevol Media understood exactly what we required, even before we
                signed any contract. They provided a lot of insights, ideas, and
                recommendations.
              </div>
            </div>
            <div className='testimonial-link hidden lg:block text-center text-xl font-normal'>
              <a href='' className='block whitespace-nowrap  text-pink-600'>
                See Project
              </a>
              <a href='' className='block whitespace-nowrap text-pink-600'>
                Read Full Review
              </a>
            </div>
          </div>
          {/* test3 */}
          <div className='testimonial-item flex justify-center items-center gap-10 '>
            <div className='tc flex flex-col lg:flex-row justify-between items-center gap-5 border border-black p-10 leading-relaxed text-lg'>
              <div className='w-[40%]  text-center lg:text-left'>
                <Star />
                <p className='whitespace-nowrap font-bold text-center lg:text-left'>
                  Sarah Liu
                </p>
                <p className='whitespace-nowrap text-center lg:text-left'>
                  CMO - ToplCup
                </p>
              </div>
              <div className='text-center lg:text-right'>
                We find their yes-can-do attitude impressive and they are always
                able to come up with a solution to our ridiculous requests.
                After launching our site for a week, our conversion rate has
                doubled. We have received great feedback on the UX and look &
                feel of the website. Amazing work!
              </div>
            </div>
            <div className='testimonial-link hidden lg:block text-center text-xl font-normal'>
              <a href='' className='block whitespace-nowrap text-pink-600'>
                See Project
              </a>
              <a href='' className='block whitespace-nowrap text-pink-600'>
                Read Full Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
