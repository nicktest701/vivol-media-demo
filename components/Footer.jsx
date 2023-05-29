import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className='footer-container bg-[#131517] text-lg text-white'>
      <div className='content flex flex-col md:flex-row justify-around gap-8  text-center md:text-left'>
        <Image
          src={logo}
          alt='logo'
          className='w-48 h-48 self-center md:self-start'
        />

        <div>
          <p className='title'>Services</p>
          <ul>
            <li>
              <a href=''>Shop Development</a>
            </li>
            <li>
              <a href=''>Bespoke Development</a>
            </li>
            <li>
              <a href=''>Shopify Migration</a>
            </li>
            <li>
              <a href=''>SEO Services</a>
            </li>
            <li>
              <a href=''>UI/UX Web Design</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className='title'>Company</p>

            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Our Work</a>
            </li>
            <li>
              <a href=''>Contact Us</a>
            </li>
            <li>
              <a href=''>Careers</a>
            </li>
            <li>
              <a href=''>Strategic Partnerships</a>
            </li>
            <li>
              <a href=''>FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <p className='title'>Social</p>

          <div>
            <p className='title'>Latest</p>

            <ul>
              <li>
                <a href=''>Read Blog</a>
              </li>
              <li>
                <a href=''>Trusted Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='content'>
        <hr className='py-5' />
        <p className='text-center'>
          &copy; {new Date().getFullYear()} | All Rights Reserved | FrebbyTech
          Consults
        </p>
      </div>
    </footer>
  );
};

export default Footer;
