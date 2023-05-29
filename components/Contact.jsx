import Image from 'next/image';
import wave from '@/assets/images/wave1.svg';

const Contact = () => {
  return (
    <div className='contact-container relative border bg-[#131517]  border-b-[4px] border-b-secondary py-24 text-white overflow-hidden'>
      <div className='content flex flex-col md:flex-row justify-between items-baseline gap-3 font-thin'>
        <div className='contact-left flex-1'>
          <div className='px-3 mb-12'>
            <h2 className='text-5xl capitalize text-center md:text-left pb-4'>
              Let&lsquo;s Talk About Your Business
            </h2>
            <p className='text-lg text-center md:text-left font-thin'>
              Get in touch with us if you want to get a quote for your project
              or simply want to say hello! We&lsquo;d love to hear from you!
            </p>
          </div>
        </div>
        <div className='contact-right flex-1 z-[2]'>
          <div className='form-container flex flex-col gap-5'>
            <input
              type='text'
              name='fullname'
              id=''
              placeholder='Full Name'
              required
            />
            <input
              type='email'
              name='email'
              id=''
              placeholder='Business Email'
              required
            />
            <input
              type='tel'
              name='phone'
              id=''
              placeholder='Business Phone'
              required
            />
            <input
              type='text'
              name='company'
              id=''
              placeholder='Company'
              required
            />
            <input
              type='url'
              name='website'
              id=''
              placeholder='Website'
              required
            />
            <textarea
              name='message'
              id=''
              cols='10'
              rows='4'
              placeholder='Your Message'
              required
            ></textarea>

            <p className='text-center py-2 md:text-left'>
              By submitting this form you agree for Vevol Media to contact you
              in regards to your query.
            </p>
            <a
              href='#'
              className='px-5 py-4 w-[200px] self-center md:self-start text-center bg-secondary transition-all duration-300 ease-in-out hover:bg-white hover:text-black'
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
      <div className='contact-wave-container '>
        <Image
          src={wave}
          alt='wave'

          className='contact-wave object-contain w-full h-full'
        />
      </div>
    </div>
  );
};

export default Contact;
